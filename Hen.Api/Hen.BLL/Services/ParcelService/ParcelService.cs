using Hen.BLL.Services.MailService;
using Hen.BLL.Services.SizeService;
using Hen.DAL;
using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.ParcelService;

public class ParcelService : IParcelService
{
    private readonly DataContext _context;
    private readonly ISizeService _sizeService;
    private readonly IMailService _mailService;
    public ParcelService(DataContext context, ISizeService sizeService, IMailService mailService)
    {
        _context = context;
        _sizeService = sizeService;
        _mailService = mailService;
    }

    public ParcelEntity Create(ParcelEntity parcel, ParcelSize size)
    {
        parcel.Id = Guid.NewGuid();
        var statusId = Guid.NewGuid();
        parcel.Size = size;

        parcel.DeliveryStatuses.Add(new ParcelStatusGroupEntity()
        {
            ParcelId = parcel.Id,
            StatusId = statusId,
            Status = new ParcelStatusEntity()
            {
                Id = statusId,
                Status = DeliveryStatus.SUBMITTED,
                CreatedAt = DateTime.UtcNow
            }
        });

        SetSender(parcel);
        SetReceiver(parcel);

        _context.Parcels.Add(parcel);
        _context.SaveChanges();

        return parcel;
    }

    public IEnumerable<ParcelEntity> GetAll(Guid? courierId)
    {
        var parcels = _context.Parcels.AsQueryable();
        if (courierId.HasValue)
        {
            parcels = parcels.Where(x => x.CourierId == courierId);
        }
        return parcels.ToList();
    }


    public ParcelEntity GetById(Guid id)
    {
        return GetParcel(id);
    }

    public ParcelEntity UpdateStatus(Guid id, DeliveryStatus status)
    {
        var parcel = GetParcel(id);

        var statusId = Guid.NewGuid();

        parcel.DeliveryStatuses.Add(new ParcelStatusGroupEntity()
        {
            ParcelId = parcel.Id,
            StatusId = statusId,
            Status = new ParcelStatusEntity()
            {
                Id = statusId,
                Status = status,
                CreatedAt = DateTime.UtcNow
            }
        });

        _context.Parcels.Update(parcel);
        _context.SaveChanges();

        _mailService.SendStatusUpdate(parcel.Receiver.Email!, parcel.Receiver.Name!, parcel.Id, status);

        return parcel;
    }

    public ParcelEntity Update(Guid id, ParcelEntity request)
    {
        var parcel = GetParcel(id);

        parcel.Update(request);

        _context.Parcels.Update(parcel);
        _context.SaveChanges();

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
        var parcel = _context.Parcels.Find(id);

        if (parcel == null)
        {
            throw new KeyNotFoundException("Parcel not found");
        }

        return parcel;
    }

    private void SetReceiver(ParcelEntity parcel)
    {
        var receiver = _context.Users.FirstOrDefault(x => x.Email == parcel.Receiver.Email || x.Phone == parcel.Receiver.Phone);
        if (receiver == null)
        {
            parcel.Receiver.Id = Guid.NewGuid();
            _context.Users.Add(parcel.Receiver);
        }
        else
        {
            parcel.Receiver = receiver;
        }
    }
    private void SetSender(ParcelEntity parcel)
    {
        var sender = _context.Users.FirstOrDefault(x => x.Email == parcel.Sender.Email || x.Phone == parcel.Sender.Phone);
        if (sender == null)
        {
            parcel.Sender.Id = Guid.NewGuid();
            _context.Users.Add(parcel.Sender);
        }
        else
        {
            parcel.Sender = sender;
        }
    }
}

