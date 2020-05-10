import {product} from './product';

export class ShoppingCartItem{
    shoppingCartItemId:string;
    productId:string;
    product:product;
    amount:number;
    shoppingCartId:string;
}