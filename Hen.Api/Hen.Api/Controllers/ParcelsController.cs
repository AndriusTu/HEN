using Hen.Api.Controllers;
using Hen.Api.Models;
using Hen.BLL.Services.ParcelService;
using Hen.BLL.Services.SizeService;
using Hen.DAL.Entities;
using Microsoft.AspNetCore.Mvc;
using Hen.DAL.Enums;
using Hen.BLL.Attributes;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParcelsController : BaseController
    {
        private readonly IParcelService _parcelService;
        private readonly ISizeService _sizeService;

        public ParcelsController(IParcelService parcelService, ISizeService sizeService)
        {
            _parcelService = parcelService;
            _sizeService = sizeService;
        }

        [HttpGet]
        [RolesRequired(nameof(AccountRole.COURIER))]
        public IEnumerable<ParcelModel> GetAll()
        {
            var parcels = _parcelService.GetAll(Caller.AccountId);
            return Mapper.Map<IEnumerable<ParcelModel>>(parcels);
        }

        [HttpGet("{id:Guid}")]
        [AllowAnonymous]
        public ParcelModel GetById(Guid id)
        {
            var parcel = _parcelService.GetById(id);
            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpGet("{id:Guid}/locations")]
        public IEnumerable<LocationModel> GetLocations(Guid id)
        {
            var locations = _parcelService.GetPossibleLocations(id);
            return Mapper.Map<IEnumerable<LocationModel>>(locations);
        }

        [HttpPost]
        [AllowAnonymous]
        public ParcelModel Create(CreateParcelModel request)
        {
            var parcel = _parcelService.Create(
                Mapper.Map<ParcelEntity>(request), 
                _sizeService.CalculateParcelSize
                (
                    request.Dimensions.Length,
                    request.Dimensions.Width, 
                    request.Dimensions.Height
                ));
            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpPut("{id:Guid}/status")]
        public ParcelModel UpdateStatus(Guid id, StatusUpdateModel statusModel)
        {
            var parcel = _parcelService.UpdateStatus(id, statusModel.Status, statusModel.LocationId);

            return Mapper.Map<ParcelModel>(parcel);
        }

        [HttpDelete("{id:Guid}")]
        [RolesRequired(nameof(AccountRole.ADMIN))]
        public void Delete(Guid id)
        {
            _parcelService.Delete(id);
        }
    }
}
