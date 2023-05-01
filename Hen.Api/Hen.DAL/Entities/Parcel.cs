using Hen.DAL.Enums;

namespace Hen.DAL.Entities
{
    public class ParcelEntity
    {
        public Guid Id { get; set; }
        public Guid SenderId { get; set; }
        public UserEntity? Sender { get; set; }
        public Guid ReceiverId { get; set; }
        public UserEntity? Receiver { get; set; }
        public Guid CourierId { get; set; }
        public AccountEntity? Courier { get; set; }
        public DeliveryType Type { get; set; }
        public ParcelSize Size { get; set; }
        public string? Description { get; set; }
        public DateTime ETA { get; set; }
        public IList<ParcelStatusGroupEntity> DeliveryStatuses { get; set; } = new List<ParcelStatusGroupEntity>();
        public DateTime CreatedAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}