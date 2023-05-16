using Hen.DAL.Enums;

namespace Hen.BLL.Services.MailService;
public interface IMailService
{
    public Task SendStatusUpdate(string receiverMail, string receiverName, Guid parcelId, DeliveryStatus newStatus);
}

