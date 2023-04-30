
using Hen.BLL.Services.AuthService.Requests;

namespace Hen.BLL.Services.AuthService;

public interface IAuthService
{
    Task<Authentication> Authenticate(LoginRequest request, CancellationToken cancellationToken = default);
    Task Register(RegisterRequest request, CancellationToken cancellationToken = default);
}
