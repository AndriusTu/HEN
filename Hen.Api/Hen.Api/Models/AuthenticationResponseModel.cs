namespace Hen.Api.Models;

public class AuthenticationResponseModel
{
    public AuthenticationResponseModel(string accessToken)
    {
        AccessToken = accessToken;
    }

    public string AccessToken { get; }
}
