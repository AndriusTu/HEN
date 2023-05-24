using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class StatusUpdateModel
    {
        public Guid LocationId { get; set; }
        public DeliveryStatus Status { get; set; }
    }
}