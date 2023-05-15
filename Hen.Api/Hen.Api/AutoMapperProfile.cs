namespace Hen.Api;

using AutoMapper;
using Hen.Api.Models;
using Hen.DAL.Entities;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<ParcelEntity, ParcelModel>().ReverseMap();
        CreateMap<UserEntity, UserModel>().ReverseMap();
        CreateMap<AccountEntity, AccountModel>().ReverseMap();
        CreateMap<DeliveryOptionEntity, DeliveryOptionModel>().ReverseMap();

        CreateMap<LocationModel, LocationEntity>().ReverseMap();
    }
}