import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from '../../core/services/register-login.service';
import { ApplicationUser } from 'src/app/core/models/ApplicationUser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService:RegisterLoginService ) { }

  userRegisterData = new ApplicationUser();

  ngOnInit(): void {
  }

  registerUser(){
    this.authService.registerUser(this.userRegisterData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
