import {ApplicationUser} from './ApplicationUser';

export class Order{
    orderId:number;
    firstName:string;
    lastName:string;
    addressLine1:string;
    addressLine2:string;
    zipCode:string;
    state:string;
    country:string;
    phoneNumber:string;
    email:string;
    orderTotal:number;
    orderPlace:Date;
    orderStatus:string;
    applicationUserId:number;
    applicationUser:ApplicationUser;
    isDeleted:boolean;
}