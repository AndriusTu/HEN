using AutoMapper;
using Hen.BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Hen.Api.Controllers;

[ApiController]
public abstract class BaseController : ControllerBase
{
    protected IMapper Mapper =>
        HttpContext.RequestServices.GetRequiredService<IMapper>();

    protected IConfiguration Configuration =>
        HttpContext.RequestServices.GetRequiredService<IConfiguration>();

    protected ICallerAccessor Caller =>
        HttpContext.RequestServices.GetRequiredService<ICallerAccessor>();
}