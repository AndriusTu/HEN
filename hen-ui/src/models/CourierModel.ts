export interface Courier {
    id: string;
    accountInformation: AccountInformation;
    name: string;
    phone: string;
    email: string;
    createdAt: string;
    updatedAt: string;

}
export interface AccountInformation {
    id: string;
    name: string;
    phone: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    location: Location;

}