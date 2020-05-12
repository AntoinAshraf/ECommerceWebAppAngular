import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/services/products.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  name = '';
  constructor( private myService:ProductsService) { }

  subscriber;
  products;
  ngOnInit(): void {
    //debugger;
    this.subscriber = this.myService.getProducts('665690c8-24d3-4c99-9bf2-08d7eebfb089')
    .subscribe((products)=>{
      console.log(products);
      if(products)
      {
        this.products = products;
      }
    }),
    (err)=>{
      console.log(err);
    }
  }

}
