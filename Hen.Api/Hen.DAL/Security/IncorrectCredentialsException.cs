using System.Runtime.Serialization;

namespace Hen.DAL.Security
{
    public class IncorrectCredentialsException : AppException
    {
        public IncorrectCredentialsException()
        {
        }

        public IncorrectCredentialsException(string? message) : base(message)
        {
        }

        public IncorrectCredentialsException(string? message, Exception? innerException) : base(message, innerException)
        {
        }
    }
}