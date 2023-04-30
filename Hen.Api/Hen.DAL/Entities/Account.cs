using Hen.DAL.Enums;
using Hen.DAL.Security;

namespace Hen.DAL.Entities
{
    public class AccountEntity
    {
        public Guid Id { get; set; }
        public Guid AccountInformationId { get; set; }
        public UserEntity? AccountInformation { get; set; }
        public string? Username { get; set; }
        public byte[] PasswordSalt { get; private set; } = Array.Empty<byte>();
        public byte[] PasswordHash { get; private set; } = Array.Empty<byte>();
        public AccountRole Role { get; set; }
        public AccountStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public void ChangePassword(string password)
        {
            var hashedPassword = PBKDF2Password.Default.CreateNewPassword(password);
            PasswordHash = hashedPassword.PasswordHash;
            PasswordSalt = hashedPassword.PasswordSalt;
        }
        public void CheckPassword(string password)
        {
            var passwordHash = PBKDF2Password.Default.ComputeHash(password, PasswordSalt);

            if (!passwordHash.SequenceEqual(PasswordHash))
            {
                throw new IncorrectCredentialsException($"Incorrect credentials.");
            }
        }
    }
}
