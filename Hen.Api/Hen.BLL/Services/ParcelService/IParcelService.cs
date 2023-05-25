using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.ParcelService;
public interface IParcelService
{
    IEnumerable<ParcelEntity> GetAll(Guid courierId);
    ParcelEntity GetById(Guid id);
    IEnumerable<LocationEntity> GetPossibleLocations(Guid parcelId);
    ParcelEntity Create(ParcelEntity request, ParcelSize size);
    ParcelEntity UpdateStatus(Guid id, DeliveryStatus status, Guid locationId);
    void Delete(Guid id);
}

