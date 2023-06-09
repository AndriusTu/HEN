﻿using Hen.DAL.Enums;

namespace Hen.DAL.Entities
{
    public class LocationEntity
    {
        public Guid Id { get; set; }
        public LocationType Type { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Street { get; set; }
        public int? HouseNumber { get; set; }
        public int? FlatNumber { get; set; }
        public string? PostalCode { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }


        public void Update(LocationEntity location)
        {
            Type = location.Type;
            Country = location.Country;
            City = location.City;
            Street = location.Street;
            HouseNumber = location.HouseNumber;
            FlatNumber = location.FlatNumber;
            PostalCode = location.PostalCode;
            Description = location.Description;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}
