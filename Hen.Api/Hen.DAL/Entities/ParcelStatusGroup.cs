using Hen.DAL.Extensions;

namespace Hen.DAL.Entities
{
    public class ParcelStatusGroupEntity : IMergeable<ParcelStatusGroupEntity>
    {
        public Guid ParcelId { get; set; }
        public ParcelEntity? Parcel { get; set; }
        public Guid StatusId { get; set; }
        public ParcelStatusEntity? Status { get; set; }

        public void Update(ParcelStatusGroupEntity request)
        {
            ParcelId = request.ParcelId;
            StatusId = request.StatusId;

        }
    }
}
