import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  cart:IProduct[] = [];
  _http:HttpClient;
  constructor(http:HttpClient)
   {
      this._http=http;
   }

  add(product:IProduct)
  {
      this.cart.push(product);
      this._http.post('/api/cart',this.cart).subscribe(()=>{
      console.log(`product ${product.name} is added to cart`);
      });
      
  }
}
