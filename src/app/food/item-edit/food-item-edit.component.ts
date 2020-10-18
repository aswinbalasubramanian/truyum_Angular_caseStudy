import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/food-item';
import { FoodService } from '../food.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';


@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {

  foodItem: MenuItem;
  dateString: string;
  inStock: string;

  constructor(private param: ActivatedRoute, private foodService: FoodService, public datepipe: DatePipe, private route: Router) {
      let itemId: any = param.snapshot.paramMap.get('itemId');
     this.foodItem = foodService.getItemById(itemId as number);
     this.dateString = this.datepipe.transform(this.foodItem.launchDate, 'dd/MM/yyyy');
     if(this.foodItem.isActive)
      this.inStock = 'true';
      else
      this.inStock = 'false';
   }

  ngOnInit(): void {
  }

  saveChanges(form: NgForm): void{
    alert('form submitted successfully');
    this.foodItem.launchDate = new Date(this.reverse(this.dateString));
    this.foodItem.isActive = this.inStock=='true'?true:false;
    this.foodService.setItem(this.foodItem);
    this.route.navigateByUrl('/menu-item-list');
  }

  reverse(str: string): string{
    return str.split("/").reverse().join('-');
  }

}
