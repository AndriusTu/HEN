using Hen.DAL.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hen.DAL.Entities
{
    public class LogEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public AccountRole Role { get; set; } = AccountRole.CLIENT;
        public string Endpoint { get; set; } = string.Empty;
        public string? Message { get; set; }
        public DateTime LoggedAt { get; set; }
    }
}
