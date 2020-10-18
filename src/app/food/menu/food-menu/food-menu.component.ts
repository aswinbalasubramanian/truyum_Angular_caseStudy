import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/site/auth.service';
import { User } from 'src/app/site/user';
import { UserService } from 'src/app/site/user.service';
import { MenuItem } from '../../../food-item';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  menuItemList: Array<MenuItem>;
  user: User;

  constructor(private menuService: FoodService, private authService: AuthService) {
    this.menuItemList = new Array<MenuItem>();
    this.user = new User();
    this.menuItemList = menuService.editedMenuItems == undefined ? menuService.getFoodItems() : menuService.editedMenuItems;
    console.log(menuService.getFoodItems());
    this.user = authService.loggedInUser;
  }

  getMenuItem($event): void {
    console.log(($event as string).length);
    this.menuItemList = new Array<MenuItem>();
    if (($event as string).length != 0)
      this.menuItemList = this.menuService.getItem($event);
    else {
      console.log('hi');
      this.menuItemList = new Array<MenuItem>();
      this.menuItemList = this.menuService.getFoodItems();
    }

  }

  addToCart($event): void {
    console.log('addtocart food menu');
    this.menuService.addToCart($event, 1);
  }

  // createMenuList(): void {
  //   let item: MenuItem = new MenuItem();

  //   item.itemId = 1;
  //   item.foodName = 'Sandwich';
  //   item.isActive = true;
  //   item.price = 99;
  //   item.category = 'Main Course';
  //   item.isFreeDelivery = true;
  //   item.launchDate = new Date('2017-03-15');
  //   item.imageURL = 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80';
  //   this.menuItemList.push(item);

  //   item = new MenuItem();
  //   item.itemId = 2;
  //   item.foodName = 'Burger';
  //   item.isActive = true;
  //   item.price = 129;
  //   item.category = 'Main Course';
  //   item.isFreeDelivery = false;
  //   item.launchDate = new Date('2017-12-23');
  //   item.imageURL = 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80';
  //   this.menuItemList.push(item);

  //   item = new MenuItem();
  //   item.itemId = 3;
  //   item.foodName = 'Pizza';
  //   item.isActive = true;
  //   item.price = 149;
  //   item.category = 'Main Course';
  //   item.isFreeDelivery = false;
  //   item.launchDate = new Date('2017-08-21');
  //   item.imageURL = 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80';
  //   this.menuItemList.push(item);

  //   item = new MenuItem();
  //   item.itemId = 4;
  //   item.foodName = 'French Fries';
  //   item.isActive = false;
  //   item.price = 57;
  //   item.category = 'Starter';
  //   item.isFreeDelivery = true;
  //   item.launchDate = new Date('2017-07-02');
  //   item.imageURL = 'https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
  //   this.menuItemList.push(item);

  //   item = new MenuItem();
  //   item.itemId = 5;
  //   item.foodName = 'Chocolate Brownie';
  //   item.isActive = true;
  //   item.price = 32;
  //   item.category = 'Dessert';
  //   item.isFreeDelivery = true;
  //   item.launchDate = new Date('2019-11-02');
  //   item.imageURL = 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=730&q=80';
  //   this.menuItemList.push(item);
  // }



  ngOnInit(): void {
  }

}
