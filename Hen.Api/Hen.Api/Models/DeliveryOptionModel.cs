namespace Hen.Api.Models
{
    public class DeliveryOptionModel
    {
        public DateOnly ETA { get; set; }
        public DeliveryType DeliveryType { get; set; }
        public float Cost { get; set; }
    }
}
