import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetails } from "../product-details/product-details";
import { CartService } from '../cart/cart-service';
import { ProductService } from './product-service';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';


@Component({
  selector: 'app-catalog',
  imports: [ProductDetails,RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit 
{
  products!:IProduct[];
  filter:string=''
  _productService:ProductService;
  // private router:Router;
  // private route:ActivatedRoute;

  constructor(private _cartService:CartService,
    productService:ProductService,
    private router:Router,
    private route:ActivatedRoute)
  {
    this._productService=productService; 
    

  }
  ngOnInit(): void 
  {
     this._productService.getProducts().subscribe(p=>{
      this.products=p;

      this.route.queryParams.subscribe((params)=>{
        this.filter=params['filter']??'';
      })
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
