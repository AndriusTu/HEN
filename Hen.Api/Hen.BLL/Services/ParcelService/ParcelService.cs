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

    private void SetReceiver(ParcelEntity parcel)
    {
        var receiver = _context.Users.Include(x => x.Location).FirstOrDefault(x => x.Email == parcel.Receiver.Email || x.Phone == parcel.Receiver.Phone);
        if (receiver == null)
        {
            parcel.ReceiverId = Guid.NewGuid();
            parcel.Receiver.Id = parcel.ReceiverId;
            parcel.Receiver.CreatedAt = DateTime.UtcNow;
            parcel.Receiver.UpdatedAt = DateTime.UtcNow;

            if(parcel.Receiver.Location != null)
            {
                parcel.Receiver.LocationId = Guid.NewGuid();
                parcel.Receiver.Location.Id = parcel.Receiver.LocationId.Value;
                parcel.Receiver.Location.CreatedAt = DateTime.UtcNow;
                parcel.Receiver.Location.UpdatedAt = DateTime.UtcNow;
            }


            _context.Users.Add(parcel.Receiver);
        }
        else
        {
            parcel.Receiver = receiver;
            parcel.ReceiverId = receiver.Id;

            if(parcel.Receiver.Location != null && receiver.Location != null)
            {
                receiver.Location.Update(parcel.Receiver.Location);
            }
            
            parcel.Receiver.Location = receiver.Location;
            

        }
    }

    private void SetSender(ParcelEntity parcel)
    {
        var sender = _context.Users.Include(x => x.Location).FirstOrDefault(x => x.Email == parcel.Sender.Email || x.Phone == parcel.Sender.Phone);
        if (sender == null)
        {
            parcel.SenderId = Guid.NewGuid();
            parcel.Sender.Id = parcel.SenderId;
            parcel.Sender.CreatedAt = DateTime.UtcNow;
            parcel.Sender.UpdatedAt = DateTime.UtcNow;

            if (parcel.Sender.Location != null)
            {
                parcel.Sender.LocationId = Guid.NewGuid();
                parcel.Sender.Location.Id = parcel.Sender.LocationId.Value;
                parcel.Sender.Location.CreatedAt = DateTime.UtcNow;
                parcel.Sender.Location.UpdatedAt = DateTime.UtcNow;
            }

            _context.Users.Add(parcel.Sender);
        }
        else
        {
            parcel.Sender = sender;
            parcel.SenderId = sender.Id;

            if (parcel.Sender.Location != null && sender.Location != null)
            {
                sender.Location.Update(parcel.Sender.Location);
            }

            parcel.Sender.Location = sender.Location;
        
        }
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

