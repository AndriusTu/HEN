using Hen.DAL.Enums;
using Hen.DAL.Extensions;

namespace Hen.DAL.Entities
{
    public class ParcelEntity
    {
        public Guid Id { get; set; }
        public Guid SenderId { get; set; }
        public UserEntity Sender { get; set; }
        public Guid ReceiverId { get; set; }
        public UserEntity Receiver { get; set; }
        public Guid CourierId { get; set; }
        public AccountEntity Courier { get; set; }
        public DeliveryType Type { get; set; }
        public ParcelSize Size { get; set; }
        public string? Description { get; set; }
        public DateTime ETA { get; set; }
        public IList<ParcelStatusGroupEntity> DeliveryStatuses { get; set; } = new List<ParcelStatusGroupEntity>();
        public DateTime CreatedAt { get; set; }
        public DateTime UpdateAt { get; set; }

        // Method to update entity with a request
        public void Update(ParcelEntity request)
        {
            SenderId = request.SenderId;
            ReceiverId = request.ReceiverId;
            CourierId = request.CourierId;
            Type = request.Type;
            Description = request.Description;
            ETA = request.ETA;
            UpdateAt = DateTime.UtcNow;
            UpdateDeliveryStatuses(request.DeliveryStatuses);
            
        }
        public void UpdateDeliveryStatuses(IList<ParcelStatusGroupEntity> statuses)
        {
            DeliveryStatuses.Merge(statuses, x => x.StatusId);
        }
    }
}