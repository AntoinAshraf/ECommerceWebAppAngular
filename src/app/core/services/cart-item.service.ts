import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartItem } from '../models/ShoppingCartItem';


@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor( private httpClient:HttpClient ) { }

  private cartItemURL = "http://localhost:51050/api/shoppingCart";

  GetShoppingCartItems(userToken){
    return this.httpClient.get<any>(
      this.cartItemURL, {
        headers : {
          "Authorization": 'Bearer ' + userToken 
        }
      } 
    );
  }

  AddToShoppingCart(userToken, prodID){
    return this.httpClient.post<any>(`${this.cartItemURL}/${prodID}`, userToken);
  }

  RemoveFromShoppingCart(userToken, prodID){
    return this.httpClient.delete<any>(`${this.cartItemURL}/${prodID}`, userToken);
  }
}
