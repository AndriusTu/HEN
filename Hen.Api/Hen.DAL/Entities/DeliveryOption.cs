using Hen.DAL.Enums;

namespace Hen.DAL.Entities
{
    public class DeliveryOptionEntity
    {
        public Guid Id { get; set; }
        public DateOnly ETA { get; set; }
        public DeliveryType DeliveryType { get; set; }
        public float Cost { get; set; }
    }
}