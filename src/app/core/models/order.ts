import {ApplicationUser} from './ApplicationUser';

export class Order{
    OrderId:number;
    FirstName:string;
    LastName:string;
    AddressLine1:string;
    AddressLine2:string;
    ZipCode:string;
    State:string;
    Country:string;
    PhoneNumber:string;
    Email:string;
    OrderTotal:number;
    OrderPlace:Date;
    OrderStatus:string;
    ApplicationUserId:number;
    ApplicationUser:ApplicationUser;
    IsDeleted:boolean;
}