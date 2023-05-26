using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;

namespace Hen.DAL;
public class DataContext : DbContext
{

    public DbSet<ParcelEntity> Parcels => Set<ParcelEntity>();
    public DbSet<AccountEntity> Accounts => Set<AccountEntity>();
    public DbSet<ParcelStatusEntity> ParcelStatuses => Set<ParcelStatusEntity>();
    public DbSet<ParcelStatusGroupEntity> ParcelStatusGroups => Set<ParcelStatusGroupEntity>();
    public DbSet<LocationEntity> Locations => Set<LocationEntity>();
    public DbSet<UserEntity> Users => Set<UserEntity>();
    public DbSet<LogEntity> Logs => Set<LogEntity>();

    private readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite(Configuration.GetConnectionString("HenApiDatabase"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}