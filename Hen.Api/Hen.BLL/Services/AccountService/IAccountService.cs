using Hen.DAL.Entities;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.AccountService;
public interface IAccountService
{
    AccountEntity CreateCourier(AccountEntity request);
    AccountRole GetRoleById(Guid id);
}

