using Hen.Api;
using Hen.Api.Middlewares;
using Hen.BLL.Services.ParcelService;
using Hen.DAL;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);

// add services to DI container
{
    var services = builder.Services;
    var env = builder.Environment;

    string connectionString = builder.Configuration.GetConnectionString("HenApiDatabase");

    services.AddDbContext(connectionString);
    services.AddCors();
    services.AddControllers().AddJsonOptions(x =>
    {
        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
    var test = AppDomain.CurrentDomain.GetAssemblies();
    services.AddAutoMapper(typeof(AutoMapperProfile));
    services.AddSwaggerGen();

    // configure DI for application services
    services.AddScoped<IParcelService, ParcelService>();

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
    app.UseSwaggerUI(x => x.SwaggerEndpoint("/swagger/v1/swagger.json", ".NET Sign-up and Verification API"));

    // global cors policy
    app.UseCors(x => x
        .SetIsOriginAllowed(origin => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());

    // global error handler
    app.UseMiddleware<ErrorHandlerMiddleware>();

    app.MapControllers();
}

app.Run("http://localhost:40008");