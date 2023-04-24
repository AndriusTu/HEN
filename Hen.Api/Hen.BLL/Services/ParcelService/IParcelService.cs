using Hen.DAL.Entities;

namespace Hen.BLL.Services.ParcelService;
public interface IParcelService
{
    IEnumerable<ParcelEntity> GetAll();
    ParcelEntity GetById(Guid id);
    ParcelEntity Create(ParcelEntity request);
    ParcelEntity Update(Guid id, ParcelEntity request);
    void Delete(Guid id);
}

