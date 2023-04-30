using Hen.BLL.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Hen.BLL.Attributes;
public class RolesRequiredAttribute : TypeFilterAttribute
{
    public static string ClaimsType => "Role";

    public RolesRequiredAttribute(params string[] roles) : base(typeof(AnyRoleRequiredFilter))
    {
        Arguments = new object[] { roles };
    }
}

public class AnyRoleRequiredFilter : IAsyncAuthorizationFilter
{
    public string[] Roles { get; private set; }

    public AnyRoleRequiredFilter(string[] roles)
    {
        Roles = roles;
    }

    public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
    {
        var principal = ClaimPricinpalProvider.GetPrincipal(context.HttpContext);
        if (principal == null)
        {
            return;
        }

        foreach (var role in Roles)
        {
            var authorized = principal.Claims.Any(x => x.Type == RolesRequiredAttribute.ClaimsType && x.Value == role.ToString());
            if (authorized)
            {
                return;
            }
        }
        throw new ForbiddenException("Access to this resource is denied.");
    }
}
