namespace Hen.BLL.Services.AuthService.Requests;

public class LoginRequest
{
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
}
