using Hen.DAL.Entities;

namespace Hen.BLL.Services.LogService
{
    public interface ILogService
    {
        Task Log(LogEntity log);
    }
}
