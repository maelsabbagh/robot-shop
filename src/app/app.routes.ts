import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Catalog } from './catalog/catalog';

export const routes: Routes = [
    {path:'home',component:Home,title:'Home - Robot Shop'},
    {path:'catalog',component:Catalog},
    {path:'cart',component:Cart}
];
