using Hen.BLL.Services.SizeService;
using Hen.DAL;
using Hen.DAL.Entities;
using Hen.DAL.Enums;
using Microsoft.EntityFrameworkCore;

namespace Hen.BLL.Services.ParcelService;

public class ParcelService : IParcelService
{
    private readonly DataContext _context;

    public ParcelService(DataContext context)
    {
        _context = context;
    }

    public ParcelEntity Create(ParcelEntity parcel, ParcelSize size)
    {
        parcel.Id = Guid.NewGuid();
        var statusId = Guid.NewGuid();

        parcel.Size = size;

        

        var parcelStatusGroup = new ParcelStatusGroupEntity()
        {
            Parcel = parcel,
            ParcelId = parcel.Id,
            StatusId = statusId,
            Status = new ParcelStatusEntity()
            {
                Id = statusId,
                Status = DeliveryStatus.SUBMITTED,
                CreatedAt = DateTime.UtcNow,
                Location = GetDistributionLocation(),
                Description = "Parcel submitted"
            }
        };

        _context.ParcelStatusGroups.Add(parcelStatusGroup);


        parcel.Receiver = SetUser(parcel.Receiver);
        parcel.Sender = SetUser(parcel.Sender);



        _context.Parcels.Add(parcel);
        _context.SaveChanges();

        return GetParcel(parcel.Id);
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

    public void Delete(Guid id)
    {
        var parcel = GetParcel(id);
        _context.Parcels.Remove(parcel);
        _context.SaveChanges();
    }

    public IEnumerable<ParcelEntity> GetAll()
    {
        var parcels = _context.Parcels
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


    public ParcelEntity Update(Guid id, ParcelEntity request)
    {
        var parcel = GetParcel(id);

        parcel.Update(request);

        _context.Parcels.Update(parcel);
        _context.SaveChanges();

        return parcel;
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
}

