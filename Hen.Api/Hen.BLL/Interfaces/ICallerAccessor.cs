namespace Hen.BLL.Interfaces
{
    public interface ICallerAccessor
    {
        public Guid AccountId { get; }
        public string Role { get; }
    }
}
