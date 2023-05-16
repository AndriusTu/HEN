using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.ParcelService;
public interface IParcelService
{
    IEnumerable<ParcelEntity> GetAll(Guid? courierId);
    ParcelEntity GetById(Guid id);
    ParcelEntity Create(ParcelEntity request, ParcelSize size);
    ParcelEntity UpdateStatus(Guid id, DeliveryStatus status);
    void Delete(Guid id);
}

