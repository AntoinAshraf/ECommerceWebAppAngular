import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { LabtopsComponent } from './components/labtops/labtops.component';
import { ProductDetailsComponent} from './components/product-details/product-details.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';

import { from } from 'rxjs';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'products',component:ProductsComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'labtops',component:LabtopsComponent},
  {path:'mobiles/:id',component:ProductDetailsComponent},
  {path:'labtops/:id',component:ProductDetailsComponent},
  {path:'mobile/:name',component:SearchProductComponent},
  {path:'labtop/:name',component:SearchProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
