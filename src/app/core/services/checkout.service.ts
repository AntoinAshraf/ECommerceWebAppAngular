import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor( private httpClient:HttpClient ) { }

  private cartItemURL = "http://localhost:51050";

  CreateOrder(orderData){
    return this.httpClient.post<any>(`${this.cartItemURL}/api/orders`, orderData);
  }
}
