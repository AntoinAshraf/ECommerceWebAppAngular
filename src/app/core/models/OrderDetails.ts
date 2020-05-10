import { Order } from './order';
import { product } from './product';

export class OrderDetails{
    OrderDetailId:number;
    OrderId:number;
    order:Order;
    ProductId:number;
    Product:product;
    Amount:number;
    Price:number;
    ProductName:string;
}