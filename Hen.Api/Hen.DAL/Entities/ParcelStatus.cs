using Hen.DAL.Enums;

namespace Hen.DAL.Entities
{
    public class ParcelStatusEntity
    {
        public Guid Id { get; set; }
        public DeliveryStatus Status { get; set; }
        public Guid LocationId { get; set; }
        public LocationEntity Location { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
