using Hen.BLL.Services.SizeService;
using Hen.DAL;
using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.ParcelService;

public class ParcelService : IParcelService
{
    private readonly DataContext _context;
    private readonly ISizeService _sizeService;

    public ParcelService(DataContext context, ISizeService sizeService)
    {
        _context = context;
        _sizeService = sizeService;
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

    public void Delete(Guid id)
    {
        var parcel = GetParcel(id);
        _context.Parcels.Remove(parcel);
        _context.SaveChanges();
    }

    public IEnumerable<ParcelEntity> GetAll()
    {
        var parcels = _context.Parcels.ToList();
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
        var parcel = _context.Parcels.Find(id);

        if (parcel == null)
        {
            throw new KeyNotFoundException("Parcel not found");
        }

        return parcel;
    }
}

