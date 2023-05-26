
using Hen.BLL.Exceptions;
using Hen.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SendGrid;
using System.Net;
using System.Text.Json;

namespace Hen.Api.Middlewares;
public class ErrorHandlerMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;

    public ErrorHandlerMiddleware(RequestDelegate next, ILogger<ErrorHandlerMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (DbUpdateConcurrencyException error)
        {
            var response = context.Response;
            response.ContentType = "application/json";
            response.StatusCode = (int)HttpStatusCode.Conflict;
            var version = error.Entries.FirstOrDefault()?.Entity.GetType().GetProperty("Version").GetValue(error.Entries.FirstOrDefault()?.Entity);

            var result = JsonSerializer.Serialize(new { message = "Update failed due to concurrency (Optimistic lock)", version = version });
            await response.WriteAsync(result);

        }
        catch (Exception error)
        {
            var response = context.Response;
            response.ContentType = "application/json";

            switch (error)
            {
                case ForbiddenException:
                    // custom application error
                    response.StatusCode = (int)HttpStatusCode.Forbidden;
                    break;
                case AppException:
                    // custom application error
                    response.StatusCode = (int)HttpStatusCode.BadRequest;
                    break;
                case KeyNotFoundException:
                    // not found error
                    response.StatusCode = (int)HttpStatusCode.NotFound;
                    break;
                default:
                    // unhandled error
                    _logger.LogError(error, error.Message);
                    response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    break;
            }

            var result = JsonSerializer.Serialize(new { message = error?.Message });
            await response.WriteAsync(result);
        }
        
    }
}