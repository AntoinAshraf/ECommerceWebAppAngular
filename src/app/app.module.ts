import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { LabtopsComponent } from './components/labtops/labtops.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { PendingorderItemComponent } from './components/pendingorder-item/pendingorder-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    LabtopsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SearchProductComponent,
    ProductsComponent,
    ProfileComponent,
    OrderItemComponent,
    PendingorderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
