using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hen.DAL.Config.Account
{
    public class AccountEntityConfiguration: IEntityTypeConfiguration<AccountEntity>
    {
        public void Configure(EntityTypeBuilder<AccountEntity> builder)
        {
            builder.ToTable("Account");
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.AccountInformation).WithOne().HasForeignKey<AccountEntity>(x => x.AccountInformationId);
            builder.Property(x => x.AccountInformationId).HasColumnType("integer");

            builder.Property(x => x.Username).HasColumnType("nvarchar(32)").IsRequired();
            builder.Property(x => x.Password).HasColumnType("nvarchar(32)").IsRequired();
            builder.Property(x => x.Role).HasColumnType("nvarchar(16)").IsRequired();
            builder.Property(x => x.Status).HasColumnType("nvarchar(16)").IsRequired();
            builder.Property(x => x.CreatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
            builder.Property(x => x.UpdatedAt).HasColumnType("timestamp").HasDefaultValueSql("CURRENT_TIMESTAMP");
        }
    }
}
