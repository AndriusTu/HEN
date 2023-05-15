using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.ParcelService;
public interface IParcelService
{
    IEnumerable<ParcelEntity> GetAll();
    ParcelEntity GetById(Guid id);
    ParcelEntity Create(ParcelEntity request, ParcelSize size);
    ParcelEntity Update(Guid id, ParcelEntity request);
    void Delete(Guid id);
}

