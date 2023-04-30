using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hen.DAL.Config.User
{
    public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.ToTable("User");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).HasColumnType("nvarchar(32)").IsRequired();
            builder.Property(x => x.Phone).HasColumnType("nvarchar(32)").IsRequired();
            builder.Property(x => x.Email).HasColumnType("nvarchar(32)").IsRequired();
            builder.Property(x => x.CreatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
            builder.Property(x => x.UpdateAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
        }
    }
}
