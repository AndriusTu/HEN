using Hen.DAL;

namespace Hen.BLL.Exceptions
{
    public class ForbiddenException : AppException
    {
        public ForbiddenException()
        {
        }

        public ForbiddenException(string? message) : base(message)
        {
        }

        public ForbiddenException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

    }
}