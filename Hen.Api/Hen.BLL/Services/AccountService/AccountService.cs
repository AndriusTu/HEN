using Hen.DAL;
using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.AccountService;

public class AccountService : IAccountService
{
    private readonly DataContext _context;

    public AccountService(DataContext context)
    {
        _context = context;
    }

    public AccountEntity CreateCourier(AccountEntity account)
    {
        account.ChangePassword("temp123");  // TODO: Change this to a random password generator and send it to the user via email

        _context.Accounts.Add(account);
        _context.SaveChanges();

        return account;
    }

    public AccountRole GetRoleById(Guid id)
    {
        var account = _context.Accounts.FirstOrDefault(x => x.Id == id);
        if (account == null)
        {
            throw new KeyNotFoundException("Account not found");
        }
        return account.Role;
    }
}

