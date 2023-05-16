using Hen.Api.Controllers;
using Hen.Api.Models;
using Hen.BLL.Services.ParcelService;
using Hen.BLL.Services.MailService;
using Hen.DAL.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Hen.DAL.Enums;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParcelsController : BaseController
    {
        private readonly IParcelService _parcelService;

        public ParcelsController(IParcelService parcelService)
        {
            _parcelService = parcelService;
        }

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<ParcelModel> GetAll([FromQuery] Guid? courierId)
        {
            var parcels = _parcelService.GetAll(courierId);
            return Mapper.Map<IEnumerable<ParcelModel>>(parcels);
        }

        [HttpGet("{id:Guid}")]
        public ParcelModel GetById(Guid id)
        {
            var parcel = _parcelService.GetById(id);
            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpPost]
        public ParcelModel Create(CreateParcelModel request)
        {
            var parcel = _parcelService.Create(Mapper.Map<ParcelEntity>(request));
            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpPut("{id:Guid}")]
        public ParcelModel Update(Guid id, ParcelModel request)
        {
            var parcel = _parcelService.Update(id, Mapper.Map<ParcelEntity>(request));
            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpPut("{id:Guid}/status")]
        public ParcelModel UpdateStatus(Guid id, DeliveryStatus status)
        {
            var parcel = _parcelService.UpdateStatus(id, status);

            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpDelete("{id:Guid}")]
        public void Delete(Guid id)
        {
            _parcelService.Delete(id);
        }
    }
}
