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
  subscriper
  productItems

  onCartClick(){
    if( UserLoginData.getUserSetting() ){

      console.log(this.prod.productId);
      this.cartItems.AddToShoppingCart(UserLoginData.getUserSetting(), this.prod.productId)
        .subscribe( (prodsCartItems) => {
          if(prodsCartItems){
            console.log("Done");
          }
        })
      
      this.cartItems.GetShoppingCartItems(UserLoginData.getUserSetting())
        .subscribe( (prodsCartItems) => {
          if(prodsCartItems){
            console.log(prodsCartItems);
          }
        });
    }else{
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }
  @Input('prodInfo') prod
}
