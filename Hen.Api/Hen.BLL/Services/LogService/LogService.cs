using Hen.DAL;
using Hen.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hen.BLL.Services.LogService
{
    public class LogService : ILogService
    {
        private readonly DataContext _context;

        public LogService(DataContext context)
        {
            _context = context;
        }

        public async Task Log(LogEntity log)
        {
            _context.Log.Add(log);
            await _context.SaveChangesAsync();
        }
    }
}
