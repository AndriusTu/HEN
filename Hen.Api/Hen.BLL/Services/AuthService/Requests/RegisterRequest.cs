using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.AuthService.Requests;

public class RegisterRequest
{
    public string Username { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public AccountRole? Role { get; set; }

    public AccountEntity ToEntity() => new()
    {
        Id = Guid.NewGuid(),
        Username = Username,
        AccountInformation = new UserEntity()
        {
            Name = Name,
            Phone = Phone,
            Email = Email,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
        },
        Role = Role ?? AccountRole.CLIENT,
        Status = AccountStatus.ACTIVE,
        CreatedAt = DateTime.UtcNow,
        UpdatedAt = DateTime.UtcNow,
    };
}
