import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myClient:HttpClient) { }
  baseURL = "http://localhost:5105";

  GetProdsWithPromotions(){
    return this.myClient.get(`${this.baseURL}/api/ProductsWithPromotions`);
  }

  GetProductByName(name)
  {
    return this.myClient.get(`${this.baseURL}/api/searchforproducts/${name}`);
  }

  AddProductForCategory(id, product){
    return this.myClient.post(`${this.baseURL}/api/categories/${id}/products`,product);
  }

  //TODO:check to remove categID
  GetProductForCategory(categID, prodID){
    return this.myClient.get(`${this.baseURL}/api/categories/${categID}/products/${prodID}`);
  }

  getProductsForCategory(categID){
    return this.myClient.get(`${this.baseURL}/api/categories/${categID}/products`);
  }

}
