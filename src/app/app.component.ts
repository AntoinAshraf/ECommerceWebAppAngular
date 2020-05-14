import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserLoginData } from './core/models/userAuthKey';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor( private router: Router ) { }

  userKey:string =  UserLoginData.getUserSetting();

  onLogoutClick(){
    UserLoginData.clearUserSetting();
    this.router.navigate(['/home']);
  }
  
  ngOnInit(): void {
    console.log(this.userKey);
    //UserLoginData.clearUserSetting();
    this.userKey = UserLoginData.getUserSetting();
  }
  title = 'ECommerceWebAppAngular';
}
