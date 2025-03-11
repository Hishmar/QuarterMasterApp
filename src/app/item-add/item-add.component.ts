import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Item } from '../item';
import { Category } from '../category';
import {MatAutocompleteModule} from '@angular/material/autocomplete'

@Component({
  selector: 'app-item-add',
  imports: [ReactiveFormsModule,MatAutocompleteModule],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {

  @Input() categories: Category[] = []
  itemForm = new FormGroup({
    
  })
  openDialog(): void {
    
  }
 @Output() newCategoryEvent = new EventEmitter<Category>();
 @Output() newItemEvent = new EventEmitter<Item>();
}
