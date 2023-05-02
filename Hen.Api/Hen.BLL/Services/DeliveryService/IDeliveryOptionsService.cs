using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.DeliveryService;
public interface IDeliveryOptionsService
{
    IEnumerable<DeliveryOptionEntity> GetDeliveryOptions(ParcelSize size, float distance);
}

