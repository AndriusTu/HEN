using Hen.DAL.Enums;

namespace Hen.DAL.Entities
{
    public class AccountEntity
    {
        public Guid Id { get; set; }
        public Guid AccountInformationId { get; set; }
        public UserEntity? AccountInformation { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public AccountRole Role { get; set; }
        public AccountStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
