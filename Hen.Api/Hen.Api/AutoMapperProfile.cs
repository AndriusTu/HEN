namespace Hen.Api;

using AutoMapper;
using Hen.Api.Models;
using Hen.BLL.Services.SizeService;
using Hen.DAL.Entities;
using Hen.DAL.Enums;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<ParcelEntity, ParcelModel>().ReverseMap();
        CreateMap<UserEntity, UserModel>().ReverseMap();
        CreateMap<AccountEntity, AccountModel>().ReverseMap();
        CreateMap<DeliveryOptionEntity, DeliveryOptionModel>().ReverseMap();

        CreateMap<CreateParcelModel, ParcelEntity>()
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

        CreateMap<ParcelModel, ParcelEntity>()
            .ForMember(dest => dest.SenderId, opt => opt.MapFrom(src => src.Sender.Id))
            .ForMember(dest => dest.ReceiverId, opt => opt.MapFrom(src => src.Receiver.Id))
            .ForMember(dest => dest.CourierId, opt => opt.MapFrom(src => src.Courier.Id))
            .ForMember(dest => dest.DeliveryStatuses, opt => opt.MapFrom(src => src.ParcelStatus));

        CreateMap<ParcelEntity, ParcelModel>()
            .ForMember(dest => dest.ParcelStatus, opt => opt.MapFrom(src => src.DeliveryStatuses));

        CreateMap<ParcelStatusModel, ParcelStatusGroupEntity>()
            .ForMember(dest => dest.StatusId, opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src));

        CreateMap<ParcelStatusGroupEntity, ParcelStatusModel>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.StatusId))
            .ForMember(dest => dest.Location, opt => opt.MapFrom(src => src.Status.Location))
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Status.Description))
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.Status.CreatedAt))
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status.Status));

        CreateMap<ParcelStatusModel, ParcelStatusEntity>()
            .ForMember(dest => dest.LocationId, opt => opt.MapFrom(src => src.Location.Id));

        CreateMap<LocationModel, LocationEntity>().ReverseMap();

        CreateMap<CreateCourierModel, AccountEntity>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()))
            .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Email))
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.Role, opt => opt.MapFrom(src => AccountRole.COURIER))
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => AccountStatus.ACTIVE))
            .ForMember(dest => dest.AccountInformation, opt => opt.MapFrom(src => src));

        CreateMap<CreateCourierModel, UserEntity>()
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.FirstName + ' ' + src.LastName))
            .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone))
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email));



    }
}