using Hen.DAL.Enums;

namespace Hen.Api.Models
{
    public class CreateCourierModel
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;

    }
}
