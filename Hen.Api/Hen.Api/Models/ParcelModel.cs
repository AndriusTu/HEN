
using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class ParcelModel
    {
        public Guid Id { get; set; }
        public UserModel Sender { get; set; } = null!;
        public UserModel Receiver { get; set; } = null!;
        public AccountModel Courier { get; set; } = null!;
        public ParcelSize Size { get; set; }
        public DeliveryType Type { get; set; }
        public string? Description { get; set; }
        public DateTime ETA { get; set; }
        public IList<ParcelStatusModel>? ParcelStatus { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public Guid? Version { get; set; }
    }
}
