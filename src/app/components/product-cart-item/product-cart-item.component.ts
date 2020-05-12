import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import { UserLoginData } from '../../core/models/userAuthKey';
import { CartItemService } from '../../core/services/cart-item.service';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {

  constructor( private router: Router, private cartItems:CartItemService ) { }

  onCartClick(){
    if( UserLoginData.getUserSetting() ){

       this.cartItems.GetShoppingCartItems(UserLoginData.getUserSetting())
        .subscribe( (prods) => {
          if(prods){
            console.log(prods);
          }
        }) 
    }else{
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }
  @Input('prodInfo') prod
}
