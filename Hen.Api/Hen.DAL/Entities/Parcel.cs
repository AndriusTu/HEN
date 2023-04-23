namespace Hen.DAL.Entities;

public class ParcelEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string? Address { get; set; }
    public string? Phone { get; set; }
    public string? Email { get; set; }
}