import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Item } from '../item';
import { Category } from '../category';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CategoryAddComponent } from "../category-add/category-add.component";


@Component({
  selector: 'app-item-add',
  imports: [ReactiveFormsModule, MatAutocompleteModule, CategoryAddComponent, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {

  today: Date = new Date();
  currentYear: number = this.today.getFullYear();
  currentMonth: number = this.today.getMonth();
  currentDay: number = this.today.getDate();
 @Input() categories: Category[] = []
  itemForm = new FormGroup({
    category: new FormControl<Category>({name:"",estimatedExpiryTime:1,defaultUnit:"COUNT",tags:[]}),
    size: new FormControl<number>(0),
    amount: new FormControl<number>(1),
    expiryStart: new FormControl<Date>(new Date()),
    expectedExpiry: new FormControl<Date>(new Date())
  })
  unit: string = "COUNT"
 newCategory: boolean = false
 openNewCategory(){
  this.newCategory = true
 }

 newCategoryCreated(newCat:Category){
  this.newCategoryEvent.emit(newCat);
 }
 getCategoryName(category:Category){
  return category.name
 }

 updateCategory(category:Category){
  this.itemForm.patchValue({expectedExpiry:new Date(this.currentYear,this.currentMonth, this.currentDay + category.estimatedExpiryTime)})
  this.unit = category.defaultUnit
 }
 createItem(){
  let newItem : Item = {
    expiryStart: this.itemForm.value.expiryStart as Date,
    amount: this.itemForm.value.size as number,
    expectedExpiry: this.itemForm.value.expectedExpiry as Date,
    category: this.itemForm.value.category?.name as string,
  }
  for (let i = 1; i<this.itemForm.value.amount! ; i++){
    this.newItemEvent.emit(newItem)
  }
 }
 @Output() newCategoryEvent = new EventEmitter<Category>();
 @Output() newItemEvent = new EventEmitter<Item>();
}
