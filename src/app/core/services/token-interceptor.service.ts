import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http'
import { RegisterLoginService } from './register-login.service'
import { UserLoginData } from '../../core/models/userAuthKey';

// import { UserLoginData } from 'src/app/core/models/userAuthKey'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }


  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
// intercept(req,next){
  let authService = this.injector.get(RegisterLoginService);
    console.log(UserLoginData.getUserSetting());
    console.log(authService.getToken());
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${UserLoginData.getUserSetting()}`
      }

      // headers: req.headers.set('Authorization', `Bearer ${UserLoginData.getUserSetting()}`)

    })
    return next.handle(tokenizedRequest);
  }
}
