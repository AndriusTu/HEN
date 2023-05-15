using Hen.DAL.Enums;

namespace Hen.BLL.Services.SizeService
{
    public interface ISizeService
    {
        ParcelSize CalculateParcelSize(float length, float width, float height);
    }
}