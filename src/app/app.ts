import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Catalog } from "./catalog/catalog";
import { SiteHeader } from "./site-header/site-header";
import { Cart } from "./cart/cart";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Catalog, SiteHeader, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
