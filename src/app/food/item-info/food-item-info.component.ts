import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/food-item';
import { User } from 'src/app/site/user';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item-info.component.html',
  styleUrls: ['./food-item-info.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() item: MenuItem;
  @Output() onAdding: EventEmitter<number> = new EventEmitter<number>();
  @Input() user: User;
  isAdmin: boolean;

  constructor() { 
    if(this.user!=undefined)
    this.isAdmin=this.user.isAdmin;
    else
    this.isAdmin=false;

    console.log(this.user);
  }

  ngOnInit(): void {
  }

  addToCart(itemId: number):void{
    this.onAdding.emit(itemId);
  }
}
