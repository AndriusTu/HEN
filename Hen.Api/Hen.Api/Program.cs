using Hen.Api;
using Hen.Api.Middlewares;
using Hen.BLL.Interfaces;
using Hen.BLL.Services.AuthService;
using Hen.BLL.Services.ParcelService;
using Hen.BLL.Services.DeliveryService;
using Hen.BLL.Services.SizeService;
using Hen.BLL.Services.MailService;
using Hen.DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using System.Text.Json.Serialization;
using Hen.BLL.Services.AccountService;
using Hen.BLL.Services.LogService;

var builder = WebApplication.CreateBuilder(args);

// add services to DI container
{
    var services = builder.Services;
    var env = builder.Environment;

    string connectionString = builder.Configuration.GetConnectionString("HenApiDatabase");

    services.AddDbContext(connectionString);
    services.AddCors();
    services.AddControllers(x =>
        x.Filters.Add(new AuthorizeFilter(new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme).RequireAuthenticatedUser().Build())))
        .AddJsonOptions(x =>
        {
            x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

        });
    services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

    builder.Services.AddSingleton<IConfigureOptions<JwtBearerOptions>, ConfigureJwtBearerOptions>();
    builder.Services.AddAuthentication()
        .AddJwtBearer();

    var test = AppDomain.CurrentDomain.GetAssemblies();
    services.AddAutoMapper(typeof(AutoMapperProfile));
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "HEN.Api", Version = "v1" });
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                      Enter 'Bearer' [space] and then your token in the text input below.
                      \r\n\r\nExample: 'Bearer 12345abcdef'",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey,
            Scheme = "Bearer"
        });
        c.AddSecurityRequirement(new OpenApiSecurityRequirement {
    {
        new OpenApiSecurityScheme {
            Reference = new OpenApiReference {
                Type = ReferenceType.SecurityScheme,
                Id = JwtBearerDefaults.AuthenticationScheme
            }
        },
        new string[] {}
    }
    });
    });

    // configure DI for application services
    services.AddScoped<ICallerAccessor>(provider =>
    {
        var httpContext = provider.GetRequiredService<IHttpContextAccessor>();
        var principal = httpContext.HttpContext?.User;
        if (principal?.Identity is null || !principal.Identity.IsAuthenticated)
        {
            return new CallerAccessor();
        }
        return new CallerAccessor(principal.Claims.ToList());
    });

    services.AddScoped<ISizeService, MetricSizeService>();
    services.AddScoped<IParcelService, ParcelService>();
    services.AddScoped<IDeliveryOptionsService, DeliveryOptionsService>();
    services.AddScoped<IAuthService, AuthService>();
    services.AddSingleton<IMailService, MailService>();
    services.AddScoped<IAccountService, AccountService>();
    services.AddScoped<ILogService, LogService>();

}

var app = builder.Build();

// migrate any database changes on startup (includes initial db creation)
using (var scope = app.Services.CreateScope())
{
    var test = scope.ServiceProvider.GetRequiredService<DataContext>();
    var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();
    dataContext.Database.Migrate();
}

// configure HTTP request pipeline
{
    // generated swagger json and swagger ui middleware
    app.UseSwagger();
    app.UseSwaggerUI(x => x.SwaggerEndpoint("/swagger/v1/swagger.json", "Hen API"));

    // global cors policy
    app.UseCors(x => x
        .SetIsOriginAllowed(origin => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());

    // global error handler
    app.UseMiddleware<ErrorHandlerMiddleware>();
    if (builder.Configuration["LogAccountEndpoints"] is "True")
    {
        app.UseMiddleware<HttpLoggingMiddleware>();
    }

    app.MapControllers();
}

app.Run("http://localhost:40008");