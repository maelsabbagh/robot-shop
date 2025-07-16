import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _http:HttpClient;
  constructor(http:HttpClient)
  {
    this._http=http;
  }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>('/api/products');
  }
}
