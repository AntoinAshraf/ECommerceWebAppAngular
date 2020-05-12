import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingCartItem } from '../models/ShoppingCartItem';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor( private httpClient:HttpClient ) { }

  private cartItemURL = "http://localhost:51050";

  GetShoppingCartItems(userToken){
    return this.httpClient.get(this.cartItemURL);
  }

  AddToShoppingCart(userToken, prodID){
    return this.httpClient.post<any>(`${this.cartItemURL}/api/shoppingCart/${prodID}`, userToken);
  }

  RemoveFromShoppingCart(userToken, prodID){
    return this.httpClient.delete<any>(`${this.cartItemURL}/api/shoppingCart/${prodID}`, userToken);
  }
}
