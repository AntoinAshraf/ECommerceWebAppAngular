import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from '../../core/services/register-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData = {};

  constructor(private authService : RegisterLoginService) { }

  
  ngOnInit(): void {
  }
  

  loginUser(){
    this.authService.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
