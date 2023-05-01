

using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class ParcelModel
    {
        public Guid Id { get; set; }
        public UserModel? Sender { get; set; }
        public UserModel? Receiver { get; set; }
        public AccountModel? Courier { get; set; }
        public DeliveryType Type { get; set; }
        public string? Description { get; set; }
        public DateTime ETA { get; set; }
        public IList<ParcelStatusModel>? ParcelStatus { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}
