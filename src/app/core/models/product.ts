import {Category} from './category';

export class product{
    productId:string;
    name:string;
    shortDescription:string;
    longDescription:string;
    price:number;
    imageUrl:string; // check datatype
    imageThumbnailUrl:string; // check datatype
    isDiscountedProduct:boolean;
    categoryId:number; 
    category:Category;
}