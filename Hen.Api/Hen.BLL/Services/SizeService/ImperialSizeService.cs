using Hen.DAL;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.SizeService
{
    public class ImperialSizeService : ISizeService
    {
        public ParcelSize CalculateParcelSize(float length, float width, float height)
        {            
            if (height > 1.28 || width > 1.25 || length > 2.1)
            {
                throw new AppException("The given parcel dimensions are bigger than allowed");
            }

            switch (height)
            {
                case <= 0.29f:
                    return ParcelSize.SMALL;
                case <= 0.62f:
                    return ParcelSize.MEDIUM;
                default:
                    return ParcelSize.LARGE;
            }
        }
    }
}