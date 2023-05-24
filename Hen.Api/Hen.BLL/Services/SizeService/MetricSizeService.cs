using Hen.DAL;
using Hen.DAL.Enums;

namespace Hen.BLL.Services.SizeService
{
    public class MetricSizeService : ISizeService
    {
        public ParcelSize CalculateParcelSize(float length, float width, float height)
        {
            // https://www.omniva.lt/siuntu_dydziai
            // S dydis: 9 cm (aukštis) x 38 cm (plotis) x 64 cm (gylis)
            // M dydis: 19 cm (aukštis) x 38 cm (plotis) x 64 cm (gylis)
            // L dydis: 39 cm (aukštis) x 38 cm (plotis) x 64 cm (gylis)
            
            if (height > 0.39 || width > 0.38 || length > 0.64)
            {
                throw new AppException("The given parcel dimensions are bigger than allowed");
            }

            switch (height)
            {
                case <= 0.09f:
                    return ParcelSize.SMALL;
                case <= 0.19f:
                    return ParcelSize.MEDIUM;
                default:
                    return ParcelSize.LARGE;
            }
        }
    }
}