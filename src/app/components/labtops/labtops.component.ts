import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/services/products.service';

@Component({
  selector: 'app-labtops',
  templateUrl: './labtops.component.html',
  styleUrls: ['./labtops.component.css']
})
export class LabtopsComponent implements OnInit {

  name = '';
  constructor(private myService:ProductsService) { }
  subscriber;
  products;

  ngOnInit(): void {
    //debugger;
    this.subscriber = this.myService.getProducts('792c4718-534e-4d95-9bf3-08d7eebfb089')
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
