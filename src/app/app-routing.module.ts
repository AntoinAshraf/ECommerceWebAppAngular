import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { SubmitCartToOrderComponent } from './components/submit-cart-to-order/submit-cart-to-order.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'prefix' },
  { path: 'register', component: RegisterComponent, pathMatch: 'prefix' },
  { path: 'home', component:ProductsContainerComponent, pathMatch: 'prefix' },
  { path: 'categ', component: CategoriesComponent },
  { path: 'checkout', component: SubmitCartToOrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
