using Hen.BLL.Attributes;
using Hen.BLL.Interfaces;
using System.Globalization;
using System.Security.Claims;

namespace Hen.BLL.Services.AuthService;

public static class AuthenticationClaimsFactory
{
    public static ICollection<Claim> FromAuthentication(Authentication authentication)
    {
        var claims = new List<Claim>
        {
            new Claim(nameof(ICallerAccessor.AccountId), authentication.Account.Id.ToString("D", CultureInfo.InvariantCulture)),
            new Claim(RolesRequiredAttribute.ClaimsType, authentication.Account.Role.ToString())
        };
        return claims;
    }
}
