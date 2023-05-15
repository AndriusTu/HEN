using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Hen.DAL.Config.ParcelStatus
{
    public class ParcelStatusEntityConfiguration : IEntityTypeConfiguration<ParcelStatusEntity>
    {
        public void Configure(EntityTypeBuilder<ParcelStatusEntity> builder)
        {
            builder.ToTable("ParcelStatus");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Status).HasColumnType("nvarchar(32)").IsRequired();

            builder.HasOne(x => x.Location).WithMany().HasForeignKey(x => x.LocationId);

            builder.Property(x => x.Description).HasColumnType("nvarchar(256)");
            builder.Property(x => x.CreatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
        }
    }
}
