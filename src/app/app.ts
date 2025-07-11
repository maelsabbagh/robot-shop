import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Catalog } from "./catalog/catalog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
