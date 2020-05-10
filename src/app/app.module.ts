import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { CartComponent } from './components/cart/cart.component';
import { CartTableRowComponent } from './components/cart-table-row/cart-table-row.component';
import { SubmitCartToOrderComponent } from './components/submit-cart-to-order/submit-cart-to-order.component';
import { SubmitOrderItemTableComponent } from './components/submit-order-item-table/submit-order-item-table.component';
import { AboutComponent } from './components/about/about.component';


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
    HttpClientModule
  ],
  providers: [
    CategoriesService,
    ProductsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
