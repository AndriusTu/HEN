using Hen.Api.Controllers;
using Hen.Api.Models;
using Hen.BLL.Services.DeliveryService;
using Hen.DAL;
using Hen.DAL.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeliveryOptionsController : BaseController
    {
        private readonly IDeliveryOptionsService _deliveryOptionService;

        public DeliveryOptionsController(IDeliveryOptionsService deliveryOptionService)
        {
            _deliveryOptionService = deliveryOptionService;
        }

        [HttpPost]
        [AllowAnonymous]
        public IEnumerable<DeliveryOptionModel> Create(DeliveryInfoModel request)
        {
            var size = ConvertDimensionsToSize(request.Dimensions!);
            var deliveryOptions = _deliveryOptionService.GetDeliveryOptions(size, 10);
            return Mapper.Map<IEnumerable<DeliveryOptionModel>>(deliveryOptions);
        }

        private ParcelSize ConvertDimensionsToSize(DimensionsModel dimensions)
        {
            // https://www.omniva.lt/siuntu_dydziai
            // S dydis: 9 cm (aukštis) x 38 cm (plotis) x 64 cm (gylis)
            // M dydis: 19 cm (aukštis) x 38 cm (plotis) x 64 cm (gylis)
            // L dydis: 39 cm (aukštis) x 38 cm (plotis) x 64 cm (gylis)
            
            if (dimensions.Height > 0.39 || dimensions.Width > 0.38 || dimensions.Length > 0.64)
            {
                throw new AppException("The given parcel dimensions are bigger than allowed");
            }
            if (dimensions.Weight > 0.30)
            {
                throw new AppException("The given parcel weight is heavier than allowed");
            }

            switch (dimensions.Height)
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
