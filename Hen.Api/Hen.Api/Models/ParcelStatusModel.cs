using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class ParcelStatusModel
    {
        public Guid Id { get; set; }
        public DeliveryStatus Status { get; set; }
        public LocationModel Location { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
