using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hen.DAL.Config.Location
{
    public class LocationEntityConfiguration : IEntityTypeConfiguration<LocationEntity>
    {
        public void Configure(EntityTypeBuilder<LocationEntity> builder)
        {
            builder.ToTable("Location");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Type).HasColumnType("nvarchar(32)").IsRequired();

            builder.Property(x => x.Country).HasColumnType("nvarchar(32)");
            builder.Property(x => x.City).HasColumnType("nvarchar(32)");
            builder.Property(x => x.Street).HasColumnType("nvarchar(32)");
            builder.Property(x => x.HouseNumber).HasColumnType("integer");
            builder.Property(x => x.FlatNumber).HasColumnType("integer");
            builder.Property(x => x.PostalCode).HasColumnType("nvarchar(16)");
            builder.Property(x => x.Description).HasColumnType("nvarchar(256)");
            builder.Property(x => x.CreatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
            builder.Property(x => x.UpdatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
        }   
    }
}
