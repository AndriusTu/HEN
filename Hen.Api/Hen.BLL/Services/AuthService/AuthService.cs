using Hen.BLL.Services.AuthService.Requests;
using Hen.DAL;
using Hen.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Hen.BLL.Services.AuthService;

public class AuthService : IAuthService
{
    public AuthService(DataContext context)
    {
        _context = context;
    }

    private readonly DataContext _context;

    public async Task<Authentication> Authenticate(LoginRequest request, CancellationToken cancellationToken = default)
    {
        var account = await GetAccount(request.Username, cancellationToken).ConfigureAwait(false);

        account.CheckPassword(request.Password);

        return new(account);
    }

    public Task Register(RegisterRequest request, CancellationToken cancellationToken = default)
    {

        var account = request.ToEntity();

        account.ChangePassword(request.Password);

        _context.Accounts.Add(account);
        _context.SaveChanges();

        return Task.CompletedTask;

    }

    private async Task<AccountEntity> GetAccount(string username, CancellationToken cancellationToken = default)
    {
        var account = await _context.Accounts
            .FirstOrDefaultAsync(x => x.Username == username, cancellationToken)
            .ConfigureAwait(false);

        if (account == null)
        {
            throw new AppException("Username or password is incorrect");
        }

        return account;
    }
}
