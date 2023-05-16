using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.ParcelService;
public interface IParcelService
{
    IEnumerable<ParcelEntity> GetAll(Guid? courierId);
    ParcelEntity GetById(Guid id);
    ParcelEntity Create(ParcelEntity request);
    ParcelEntity Update(Guid id, ParcelEntity request);
    ParcelEntity UpdateStatus(Guid id, DeliveryStatus status);
    void Delete(Guid id);
}

