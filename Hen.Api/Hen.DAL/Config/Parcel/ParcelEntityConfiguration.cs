using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hen.DAL.Config.Parcel;

public class ParcelEntityConfiguration : IEntityTypeConfiguration<ParcelEntity>
{
    public void Configure(EntityTypeBuilder<ParcelEntity> builder)
    {
        builder.ToTable("Parcel");
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Sender).WithMany().HasForeignKey(x => x.SenderId);
        builder.Property(x => x.SenderId).HasColumnType("integer");

        builder.HasOne(x => x.Receiver).WithMany().HasForeignKey(x => x.ReceiverId);
        builder.Property(x => x.ReceiverId).HasColumnType("integer");

        builder.HasOne(x => x.Courier).WithMany().HasForeignKey(x => x.CourierId);
        builder.Property(x => x.CourierId).HasColumnType("integer");

        builder.Property(x => x.Type).HasColumnType("nvarchar(16)").IsRequired();
        builder.Property(x => x.Description).HasColumnType("nvarchar(256)");
        builder.Property(x => x.ETA).HasColumnType("timestamp");


        builder.HasMany(x => x.DeliveryStatuses).WithOne().HasForeignKey(x => x.ParcelId);

        builder.Property(x => x.CreatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
        builder.Property(x => x.UpdateAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
    }
}