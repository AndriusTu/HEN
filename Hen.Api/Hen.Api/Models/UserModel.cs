﻿namespace Hen.Api.Models
{
    public class UserModel
    {
        public Guid? Id { get; set; }
        public string? Name { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public LocationModel Location { get; set; }
    }
}
