
using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class CreateParcelModel
    {
        public UserModel Sender { get; set; } = null!;
        public UserModel Receiver { get; set; } = null!;
        public DimensionsModel Dimensions { get; set; } = null!;
        public DeliveryType Type { get; set; }
        public string? Description { get; set; }
        public DateTime ETA { get; set; }
    }
}
