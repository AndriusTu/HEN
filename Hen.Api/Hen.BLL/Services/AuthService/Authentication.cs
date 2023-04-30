using Hen.DAL.Entities;

namespace Hen.BLL.Services.AuthService;

public class Authentication
{
    public Authentication(AccountEntity account)
    {
        Account = account;
    }

    public AccountEntity Account { get; }
}
