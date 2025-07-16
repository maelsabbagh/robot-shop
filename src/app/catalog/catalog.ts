import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetails } from "../product-details/product-details";
import { CartService } from '../cart-service';
import { ProductService } from './product-service';


@Component({
  selector: 'app-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit 
{
  products!:IProduct[];
  filter:string=''
  _productService:ProductService;

  constructor(private _cartService:CartService,productService:ProductService)
  {
    this._productService=productService; 

  }
  ngOnInit(): void 
  {
     this._productService.getProducts().subscribe(p=>{
      this.products=p;
     });  
  }



  getFilteredProducts()
  {
    if(this.filter==='')
      {
        return this.products;
      }
    else
    {
      return this.products.filter((p=>p.category===this.filter));
    }
  }

  

   addToCart(product:IProduct)
  {
      this._cartService.add(product);
  }
}
