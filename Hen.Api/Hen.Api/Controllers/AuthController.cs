using Hen.Api.Models;
using Hen.BLL.Services.AuthService;
using Hen.BLL.Services.AuthService.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Hen.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : BaseController
{
    public AuthController(IAuthService authService)
    {
        AuthService = authService ?? throw new ArgumentNullException(nameof(authService));
    }

    private IAuthService AuthService { get; }

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<AuthenticationResponseModel> Login([FromBody] LoginRequest request, CancellationToken cancellationToken = default)
    {

        var response = await AuthService
            .Authenticate(request, cancellationToken)
            .ConfigureAwait(false);

        return CreateModel(response);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task Register([FromBody] RegisterRequest request, CancellationToken cancellationToken = default)
    {
        await AuthService.Register(request, cancellationToken);
    }

    private AuthenticationResponseModel CreateModel(Authentication authentication)
    {
        var claims = AuthenticationClaimsFactory.FromAuthentication(authentication);
        var accessToken = GenerateJwtToken(claims);
        return new AuthenticationResponseModel(accessToken);
    }

    private string GenerateJwtToken(ICollection<Claim> claims)
    {
        var key = Encoding.UTF8.GetBytes("HenApiSecretJWTKey");
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.Add(TimeSpan.FromHours(24)),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
