namespace Hen.Api.Models
{
    public class DeliveryInfoModel
    {
        public ShortAddressModel? From { get; set; }
        public ShortAddressModel? To { get; set; }
        public DimensionsModel? Dimensions { get; set; }
    }
}
