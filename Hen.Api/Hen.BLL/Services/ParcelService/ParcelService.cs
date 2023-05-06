using Hen.DAL;
using Hen.DAL.Entities;

namespace Hen.BLL.Services.ParcelService;

public class ParcelService : IParcelService
{
    private readonly DataContext _context;

    public ParcelService(DataContext context)
    {
        _context = context;
    }

    public ParcelEntity Create(ParcelEntity parcel)
    {
        parcel.Id = Guid.NewGuid();

        foreach (var status in parcel.DeliveryStatuses)
        {
            status.ParcelId = parcel.Id;
        }

        _context.Parcels.Add(parcel);
        _context.SaveChanges();

        return parcel;
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

