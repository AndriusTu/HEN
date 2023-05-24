using Hen.DAL.Enums;

namespace Hen.BLL.Services.SizeService
{
    public class SizeServiceDecorator : ISizeService
    {
        private readonly ISizeService _sizeService;

        private List<int> _parcelCounts = new();

        public List<int> ParcelCounts { get { return _parcelCounts; } }

        public SizeServiceDecorator(ISizeService sizeService)
        {
            _sizeService = sizeService;
        }

        public ParcelSize CalculateParcelSize(float length, float width, float height)
        {
            var parcelSize = _sizeService.CalculateParcelSize(length, width, height);

            _parcelCounts.Add((int)parcelSize);

            return parcelSize;
        }
    }
}