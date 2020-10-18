import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodItemEditComponent } from './food/item-edit/food-item-edit.component';
import { FoodMenuComponent } from './food/menu/food-menu/food-menu.component';
import { ShoppingCartComponent } from './shopping/cart/shopping-cart.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';

const routes: Routes = [
  {path: 'menu-item-list', component: FoodMenuComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'edit-menu-item/:itemId', component: FoodItemEditComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/menu-item-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
