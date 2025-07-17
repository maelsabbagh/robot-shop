import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Catalog } from './catalog/catalog';
import { SignIn } from './user/sign-in/sign-in';

// order matters, angular start matching urls with the order of routes you have provided
export const routes: Routes = [
    {path:'home',component:Home,title:'Home - Robot Shop'},
    {path:'catalog',component:Catalog}, // :filter is route parameter
    {path:'cart',component:Cart},
    {path:'sign-in',component:SignIn},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
