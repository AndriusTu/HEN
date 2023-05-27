using Hen.BLL.Services.MailService;
using Hen.BLL.Services.SizeService;
using Hen.DAL;
using Hen.DAL.Entities;
using Hen.DAL.Enums;
using Microsoft.EntityFrameworkCore;

namespace Hen.BLL.Services.ParcelService;

public class ParcelService : IParcelService
{
    private readonly DataContext _context;
    private readonly IMailService _mailService;
    public ParcelService(DataContext context, IMailService mailService)
    {
        _context = context;
        _mailService = mailService;
    }

    public IEnumerable<ParcelEntity> GetAll(Guid courierId)
    {
        var parcels = _context.Parcels
            .Where(x => x.CourierId == courierId)
            .Include(x => x.DeliveryStatuses)
            .ThenInclude(x => x.Status)
            .ThenInclude(x => x.Location)
            .ToList();
        return parcels;
            
    }

    public ParcelEntity GetById(Guid id)
    {
        return GetParcel(id);
    }

    public IEnumerable<LocationEntity> GetPossibleLocations(Guid parcelId)
    {
        var parcel = GetParcel(parcelId);

        var locations = new List<LocationEntity>();

        if (parcel.Sender.Location != null)
            locations.Add(parcel.Sender.Location);
        if (parcel.Receiver.Location != null)
            locations.Add(parcel.Receiver.Location);
        
        locations.Add(GetDistributionLocation());
        return locations;
    }

    public ParcelEntity Create(ParcelEntity parcel, ParcelSize size)
    {
        parcel.Id = Guid.NewGuid();
        parcel.Version = Guid.NewGuid();

        parcel.Size = size;

        var parcelStatusGroup = new ParcelStatusGroupEntity()
        {
            ParcelId = parcel.Id,
            Status = new ParcelStatusEntity()
            {
                Id = Guid.NewGuid(),
                Status = DeliveryStatus.SUBMITTED,
                CreatedAt = DateTime.UtcNow,
                Location = GetDistributionLocation(),
                Description = "Parcel submitted"
            }
        };

        _context.ParcelStatusGroups.Add(parcelStatusGroup);

        parcel.Receiver = SetUser(parcel.Receiver);
        parcel.Sender = SetUser(parcel.Sender);

        SophisticatedAlgorithmForCourierSelection(parcel);

        _context.Parcels.Add(parcel);
        _context.SaveChanges();

        return GetParcel(parcel.Id);
    }

    public ParcelEntity UpdateStatus(Guid id, DeliveryStatus status, Guid locationId)
    {
        var parcel = GetParcel(id);
        parcel.Version = Guid.NewGuid();

        var location = _context.Locations.FirstOrDefault(x => x.Id == locationId);

        if (location == null)
            location = GetDistributionLocation();

        var parcelStatusGroup = new ParcelStatusGroupEntity()
        {
            ParcelId = parcel.Id,
            Status = new ParcelStatusEntity()
            {
                Id = Guid.NewGuid(),
                Status = status,
                CreatedAt = DateTime.UtcNow,
                Location = location,
            }
        };

        _context.ParcelStatusGroups.Add(parcelStatusGroup);

        try
        {
            //Thread.Sleep(2000);
            _context.SaveChanges();
            _mailService.SendStatusUpdate(parcel.Receiver.Email!, parcel.Receiver.Name!, parcel.Id, status);
        } 
        catch (DbUpdateConcurrencyException e)
        {
            throw new DbUpdateConcurrencyException("Parcel status update failed", e);
        }

        return parcel;
    }

    public void Delete(Guid id)
    {
        var parcel = GetParcel(id);
        _context.Parcels.Remove(parcel);
        _context.SaveChanges();
    }

    private ParcelEntity GetParcel(Guid id)
    {
        var parcel = _context.Parcels
            .Include(x => x.Sender)
            .ThenInclude(x => x.Location)
            .Include(x => x.Receiver)
            .ThenInclude(x => x.Location)
            .Include(x => x.Courier)
            .ThenInclude(x => x.AccountInformation)
            .Include(x => x.DeliveryStatuses)
            .ThenInclude(x => x.Status)
            .ThenInclude(x => x.Location)
            .FirstOrDefault(x => x.Id == id);

        if (parcel == null)
        {
            throw new KeyNotFoundException("Parcel not found");
        }

        return parcel;
    }

    private UserEntity SetUser(UserEntity user)
    {
        var userEntity = _context.Users.Include(x => x.Location).FirstOrDefault(x => x.Email == user.Email || x.Phone == user.Phone);
        if (userEntity == null)
        {
            user.Id = Guid.NewGuid();
            user.CreatedAt = DateTime.UtcNow;
            user.UpdatedAt = DateTime.UtcNow;

            if (user.Location != null)
            {
                user.Location.Id = Guid.NewGuid();
                user.Location.CreatedAt = DateTime.UtcNow;
                user.Location.UpdatedAt = DateTime.UtcNow;
            }

            _context.Users.Add(user);
        }
        else
        {
            user = userEntity;

            if (user.Location != null && userEntity.Location != null)
            {
                userEntity.Location.Update(user.Location);
            }

            user.Location = userEntity.Location;

        }
        return user;
    }

    private LocationEntity GetDistributionLocation()
    {
        var location = _context.Locations.FirstOrDefault(x => x.Type == LocationType.DISTRIBUTION_POINT);
        if (location == null)
        {
            location = new LocationEntity()
            {
                Id = Guid.NewGuid(),
                Type = LocationType.DISTRIBUTION_POINT,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                City = "Sofia",
                Country = "Bulgaria",
                Street = "Bulgaria",
                HouseNumber = 1,
                FlatNumber = 1,
                PostalCode = "1000",
                Description = "Good place to distribute things",
            };
        }
        return location;
    }

    private void SophisticatedAlgorithmForCourierSelection(ParcelEntity parcel)
    {
        var couriers = _context.Accounts.Where(x => x.Role == AccountRole.COURIER).ToList();
        var parcels = _context.Parcels.ToList();

        var courier = couriers.OrderBy(x => parcels.Where(y => y.CourierId == x.Id)).FirstOrDefault();
        parcel.CourierId = courier.Id;
    }
}

