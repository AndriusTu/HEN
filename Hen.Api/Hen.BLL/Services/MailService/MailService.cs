using Hen.DAL.Enums;
using SendGrid;
using SendGrid.Helpers.Mail;


namespace Hen.BLL.Services.MailService;

// https://www.courier.com/guides/csharp-send-email/#sendgrid
public class MailService : IMailService
{
    private readonly SendGridClient _client;
    private const string apiKey = "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";
    private const string senderMail = "henriksendss@gmail.com";
    private const string senderName = "Henrik";

    public MailService()
    {
        _client = new SendGridClient(apiKey);
    }

    public async Task SendStatusUpdate(string receiverMail, string receiverName, Guid parcelId, DeliveryStatus newStatus)
    {
        var senderEmail = new EmailAddress(senderMail, senderName); 
        var recieverEmail = new EmailAddress(receiverMail, receiverName);  

        string emailSubject = String.Format("Parcel {0} Update", parcelId); 
        string textContent = "";
        string htmlContent = String.Format("Your parcel delivery status was updated to <strong>{0}</strong>", newStatus);

        var msg = MailHelper.CreateSingleEmail(senderEmail, recieverEmail, emailSubject, textContent, htmlContent);

        var resp = await _client.SendEmailAsync(msg).ConfigureAwait(false);
    }
}
