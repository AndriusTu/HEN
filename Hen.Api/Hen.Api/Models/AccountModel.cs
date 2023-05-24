using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class AccountModel
    {
        public Guid Id { get; set; }
        public UserModel? AccountInformation { get; set; }
        public string? Username { get; set; }
        public AccountRole Role { get; set; }
        public AccountStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
