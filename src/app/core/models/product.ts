import {Category} from './category';

export class product{
    productId:number;
    Name:string;
    ShortDescription:string;
    LongDescription:string;
    Price:number;
    ImageUrl:string; // check datatype
    ImageThumbnailUrl:string; // check datatype
    IsDiscountedProduct:boolean;
    CategoryId:number; 
    category:Category;
    IsDeleted:boolean;
}