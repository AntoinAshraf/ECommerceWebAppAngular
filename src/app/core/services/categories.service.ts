import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../core/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private myClient:HttpClient ) {  }
  baseURL = "http://localhost:5105";

  GetAllCategories(){
    return this.myClient.get(`${this.baseURL}/api/categories`);
  }
}
