using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hen.DAL
{
    public static class StartupSetup
    {
        public static void AddDbContext(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(connectionString, x =>
                    x.MigrationsAssembly("Hen.DAL"));
            });
        }
    }

}
