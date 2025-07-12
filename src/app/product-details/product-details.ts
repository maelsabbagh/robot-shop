import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe,NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails 
{
  @Input() product!:IProduct
  @Output() buy= new EventEmitter();
  getImageUrl(product:IProduct)
  {
    return 'images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product:IProduct)
  {
     this.buy.emit();
  }

  // we can return a string or an array of strings
  // we may need to make an array and based on some logic/conditions to push values to this array
  getDiscountedClasses(product:IProduct)
  {
    if(product.discount>0)
    {
      return ['strikethrough']
    }
    else return []

  }
}
