using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hen.DAL.Config.Parcel;

public class ParcelEntityConfiguration : IEntityTypeConfiguration<ParcelEntity>
{
    public void Configure(EntityTypeBuilder<ParcelEntity> builder)
    {
        builder.ToTable("Parcels");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Name).HasColumnType("nvarchar(256)").IsRequired();
        builder.Property(x => x.Address).HasColumnType("nvarchar(256)");
        builder.Property(x => x.Email).HasColumnType("nvarchar(256)");
        builder.Property(x => x.Phone).HasColumnType("nvarchar(256)");

    }
}