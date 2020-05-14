import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl:string = "http://localhost:51050/api"
  constructor(private myClient:HttpClient) { }

  //get userOrders
  getOrders()
  {
    let response = this.myClient.get(`${this.apiUrl}/orders/UserOrder`,{observe:'body'});
    return response;
  }

  //get userPendingOrders
  getPendingOrders()
  {
    let response = this.myClient.get(`${this.apiUrl}/orders/UserPendingOrders`,{observe:'body'});
    return response;
  }

  //get userNotPendingOrders
  getNotPendingOrders()
  {
    let response = this.myClient.get(`${this.apiUrl}/orders/UserNotPendingOrders`,{observe:'body'});
    return response;
  }

  //delete user Order
  deleteOrder(id)
  {
    let response = this.myClient.delete(`${this.apiUrl}/orders/${id}`);
    return response;
  }
}
