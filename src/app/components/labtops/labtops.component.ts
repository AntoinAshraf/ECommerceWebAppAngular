import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/core/services/products.service';
import { CategoriesService} from 'src/app/core/services/categories.service';
import { Router } from '@angular/router';
import { UserLoginData } from 'src/app/core/models/userAuthKey';

@Component({
  selector: 'app-labtops',
  templateUrl: './labtops.component.html',
  styleUrls: ['./labtops.component.css']
})
export class LabtopsComponent implements OnInit {

  name = '';
  constructor(private myService:ProductsService, private myService2:CategoriesService,
              private router:Router) { }

  subscriber2;
  categories;
  categoryID;

  subscriber;
  products;

  
  ngOnInit(): void {
    

     //debugger;
     this.subscriber2 = this.myService2.GetAllCategories()
     .subscribe((categories)=>{
       console.log('categories: ',categories);
       if(categories)
       {
         this.categories = categories;
         this.categories.forEach(element => {
           if(element.categoryName=="Labs")
           {
            this.categoryID=element.categoryId;
            //debugger;
            this.subscriber = this.myService.getProducts(`${this.categoryID}`)
            .subscribe((products)=>{
            console.log("products: ", products);
            if(products)
            {
              this.products = products;
            }
          }),
          (err)=>{
            this.router.navigate(['/login']);
            console.log(err);
            }
           }
        });
       }
     }),
     (err)=>{
      this.router.navigate(['/login']);
      window.location.reload();
       console.log(err);
     }

  }

}
