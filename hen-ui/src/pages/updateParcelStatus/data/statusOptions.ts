const statusOptions = [
    { value: 'SUBMITTED', label: 'Submitted' },
    { value: 'IN_STORAGE', label: 'In storage' },
    { value: 'WITH_COURIER', label: 'With courier' },
    { value: 'DELIVERED', label: 'Delivered' },
    { value: 'CANCELED', label: 'Canceled' },
    { value: 'RETURNED', label: 'Returned' },
];
export default statusOptions;

export function getLocationOptions(ParcelLocationList) {
    return ParcelLocationList.map((location) => {
        return  {value: location.id,
            label: location.city + ', ' + location.street + ' st. ' + location.houseNumber
        }})
}