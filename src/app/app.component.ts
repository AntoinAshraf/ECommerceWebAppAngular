import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserLoginData } from './core/models/userAuthKey';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  userKey:string =  UserLoginData.getUserSetting();

  onLogoutClick(){
    UserLoginData.clearUserSetting();
    location.reload();
  }
  
  ngOnInit(): void {
    console.log(this.userKey);
    //UserLoginData.clearUserSetting();
    this.userKey = UserLoginData.getUserSetting();
  }
  title = 'ECommerceWebAppAngular';
}
