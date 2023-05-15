using Hen.Api.Controllers;
using Hen.Api.Models;
using Hen.BLL.Services.AccountService;
using Hen.BLL.Services.ParcelService;
using Hen.DAL.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : BaseController
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("courier")] // TODO: Add role check
        public AccountModel CreateCourier(CreateCourierModel request)
        {
            var account = _accountService.CreateCourier(Mapper.Map<AccountEntity>(request));
            return Mapper.Map<AccountModel>(account);
        }
    }
}
