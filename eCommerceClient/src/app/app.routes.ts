import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderComponent } from './components/order/order.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children:[
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "orders",
                component: OrderComponent
            },
            {
                path: "baskets",
                component: ShoppingCartComponent
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            },
            {
                path: "**",
                component: NotFoundComponent
            }
        ]
    }
];
