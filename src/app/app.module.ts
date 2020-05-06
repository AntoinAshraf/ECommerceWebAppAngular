import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCartItemComponent } from './components/product-cart-item/product-cart-item.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCartItemComponent,
    ProductsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
