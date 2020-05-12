import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private myService:OrdersService,private myService2:UserService) { }

  subscriber;
  orders;
  subscriber2;
  data;
  ngOnInit(): void {
    //debugger;
    this.subscriber = this.myService.getOrders()
    .subscribe((orders)=>{
      console.log(orders);
      if(orders)
      {
        this.orders = orders;
      }
    }),
    (err)=>{
      console.log(err);
    }

    //user info 
    //debugger;
    this.subscriber2=this.myService2.getUserInfo()
    .subscribe((data)=>{
      console.log(data);
      if(data)
      {
        this.data = data;
      }
    }),
    (err)=>{
      console.log(err);
    }
  }
}
