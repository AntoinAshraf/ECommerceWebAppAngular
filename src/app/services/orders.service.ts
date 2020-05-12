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
    let response = this.myClient.get(`${this.apiUrl}/UserOrder`,{observe:'body'});
    return response;
  }
}
