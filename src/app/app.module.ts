import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { ProductCartItemComponent } from './components/product-cart-item/product-cart-item.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductsService } from './core/services/product.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './core/services/categories.service';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CartTableRowComponent } from './components/cart-table-row/cart-table-row.component';
import { SubmitCartToOrderComponent } from './components/submit-cart-to-order/submit-cart-to-order.component';
import { SubmitOrderItemTableComponent } from './components/submit-order-item-table/submit-order-item-table.component';
import { AboutComponent } from './components/about/about.component';

// Token service
import {TokenInterceptorService, authInterceptorProviders} from './core/services/token-interceptor.service'

// import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
// import {UserLoginData} from './core/models/userAuthKey';


// // called on every request to retrieve the token
// export function jwtOptionsFactory() {
//   console.log("inside JWT");
//   return {
//     tokenGetter: () => UserLoginData.getUserSetting(), //tokenService.getToken(),
//     whitelistedDomains: ['localhost:51050']
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    ProductCartItemComponent,
    ProductsContainerComponent,
    CategoriesComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CartTableRowComponent,
    SubmitCartToOrderComponent,
    SubmitOrderItemTableComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,

    // JwtModule.forRoot({
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: jwtOptionsFactory,
    //     deps: [UserLoginData]
    //   }
    // })

  ],
  providers: [
    CategoriesService,
    ProductsService,
    // UserLoginData
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
