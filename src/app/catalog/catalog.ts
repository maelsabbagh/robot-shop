import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog 
{
  product:IProduct;

  constructor()
  {
    this.product = {
      id:2,
      description:"a friendly robot",
      name:"Friendly robot",
      imageName:"head-friendly.png",
      category:"heads",
      price:945.0,
      discount:0.2
    };
  }

  getImageUrl()
  {
    return 'images/robot-parts/' + this.product.imageName;
  }
}
