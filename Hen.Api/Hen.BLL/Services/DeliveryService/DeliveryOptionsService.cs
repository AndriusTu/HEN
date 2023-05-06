using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.DeliveryService;

public class DeliveryOptionsService : IDeliveryOptionsService
{
    public IEnumerable<DeliveryOptionEntity> GetDeliveryOptions(ParcelSize size, float distance)
    {
        List<DeliveryOptionEntity> deliveryOptions = new();
        foreach(DeliveryType deliveryType in Enum.GetValues(typeof(DeliveryType)))
        {
            deliveryOptions.Add(new DeliveryOptionEntity
            {
                DeliveryType = deliveryType,
                Cost = GetCost(size, distance, deliveryType),
                ETA = DateOnly.FromDateTime(DateTime.Now.AddDays(1))
            });
        }
        return deliveryOptions;
    }

    private float GetCost(ParcelSize parcelSize, float distance, DeliveryType deliveryType)
    {
        int deliveryTypeCost = deliveryType switch
        {
            DeliveryType.BASIC => 0,
            DeliveryType.EXPRESS => 5,
            DeliveryType.SECURE => 5,
        };
        return (int)parcelSize * 2 + deliveryTypeCost;
    }
}
