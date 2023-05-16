using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hen.DAL.Config.ParcelStatusGroup
{
    public class ParcelStatusGroupEntityConfiguration : IEntityTypeConfiguration<ParcelStatusGroupEntity>
    {
        public void Configure(EntityTypeBuilder<ParcelStatusGroupEntity> builder)
        {
            builder.ToTable("ParcelStatusGroup");
            builder.HasKey(x => new {x.ParcelId, x.StatusId});
            
            builder.HasOne(x => x.Parcel).WithMany(x => x.DeliveryStatuses).HasForeignKey(x => x.ParcelId);

            builder.HasOne(x => x.Status).WithMany().HasForeignKey(x => x.StatusId);
        }
    }
}
