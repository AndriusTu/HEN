using Hen.DAL.Entities;

namespace Hen.BLL.Services.AccountService;
public interface IAccountService
{
    AccountEntity CreateCourier(AccountEntity request);
}

