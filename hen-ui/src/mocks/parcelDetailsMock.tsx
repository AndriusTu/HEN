import Address from "./deliveriesMock";
import UserContactInformation from "./deliveriesMock";

export interface getParcelDetails
{
    id : number,
    eta : string;
    status_history: StatusHistory [],
    receiver: Receiver;
}
interface UserContactInformation {
    phone: string;
}

interface Address {
    street: string;
    city: string;
    zip: string;
    country: string;
}
export interface Receiver {
    name: string;
    surname: string;
    phone: UserContactInformation;
    address: Address;
}
export interface StatusHistory {
    status: string;
    location: string;
    date: string;
}

const parcelDetailsMock : getParcelDetails =
{
    id: 1,
    eta: '2021-10-25',
    status_history: [
        {
            status: 'Pending',
            location: 'Vilnius',
            date: '2022-10-10'
        },
        {
            status: 'In transit',
            location: 'Kaunas',
            date: '2022-10-11'
        }
    ],
    receiver: {
        name: 'Jonas',
        surname: 'Jonaitis',
        phone: {phone: '+37060000000'},
        address: {
            street: 'Savanoriu pr. 1',
            city: 'Kaunas',
            zip: 'LT-00000',
            country: 'Lithuania'
        },
    }
}
;

export default parcelDetailsMock;
