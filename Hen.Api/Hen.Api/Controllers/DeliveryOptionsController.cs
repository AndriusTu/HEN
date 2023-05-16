using Hen.Api.Controllers;
using Hen.Api.Models;
using Hen.BLL.Services.DeliveryService;
using Hen.BLL.Services.SizeService;
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
        private readonly ISizeService _sizeService;

        public DeliveryOptionsController(IDeliveryOptionsService deliveryOptionService, ISizeService sizeService)
        {
            _deliveryOptionService = deliveryOptionService;
            _sizeService = sizeService;
        }

        [HttpPost]
        [AllowAnonymous]
        public IEnumerable<DeliveryOptionModel> Create(DeliveryInfoModel request)
        {
            var size = _sizeService.CalculateParcelSize(request.Dimensions!.Length, request.Dimensions!.Width, request.Dimensions!.Height);
            var deliveryOptions = _deliveryOptionService.GetDeliveryOptions(size, 10);
            return Mapper.Map<IEnumerable<DeliveryOptionModel>>(deliveryOptions);
        }
    }
}
