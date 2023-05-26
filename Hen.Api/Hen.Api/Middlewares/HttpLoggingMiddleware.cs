using Hen.BLL.Services.AccountService;
using Hen.BLL.Services.LogService;
using Hen.DAL.Entities;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace Hen.Api.Middlewares
{
    public class HttpLoggingMiddleware
    {
        private readonly RequestDelegate _next;

        public HttpLoggingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, ILogService logService, IAccountService accountService)
        {
            var endpoint = context.GetEndpoint()!.Metadata.GetMetadata<ControllerActionDescriptor>();
            var accountId = Guid.Parse(context.User.Claims.FirstOrDefault(x => x.Type == "AccountId")?.Value);

            var log = new LogEntity
            {
                Id = Guid.NewGuid(),
                UserId = accountId,
                Role = accountService.GetRoleById(accountId),
                Endpoint = endpoint.ControllerTypeInfo.FullName + '.' + endpoint.ActionName,
                Message = $"User: {accountId} used {endpoint.ControllerTypeInfo.FullName} class and {endpoint.ActionName} method",
                LoggedAt = DateTime.UtcNow
            };

            await logService.Log(log);
            await _next(context);
        }
    }
}
