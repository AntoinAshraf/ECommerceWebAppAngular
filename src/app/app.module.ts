import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCartItemComponent } from './components/product-cart-item/product-cart-item.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductsService } from './core/services/product.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './core/services/categories.service';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCartItemComponent,
    ProductsContainerComponent,
    CategoriesComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService,
    ProductsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
