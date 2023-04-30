using Hen.BLL.Interfaces;
using System.Collections;
using System.ComponentModel;
using System.Reflection;
using System.Security.Claims;

namespace Hen.BLL.Services.AuthService;

public class CallerAccessor : ICallerAccessor
{
    public CallerAccessor()
    {
        AccountId = Guid.Empty;
        Role = string.Empty;
    }

    public CallerAccessor(IEnumerable<Claim> claims)
    {
        var properties = GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance);
        foreach (var property in properties)
        {

            var claim = claims.FirstOrDefault(x => x.Type == property.Name);
            if (claim == null)
            {
                Throw(property.Name);
            }

            try
            {
                var converter = TypeDescriptor.GetConverter(property.PropertyType);

                var value = converter.ConvertFromString(claim!.Value);
                property.SetValue(this, value);

            }
            catch (Exception)
            {
                Throw(property.Name);
            }
        }
    }

    public Guid AccountId { get; init; }
    public string Role { get; init; } = string.Empty;

    private static void Throw(string field)
    {
        throw new KeyNotFoundException($"There is no {field} value in claims");
    }
}
