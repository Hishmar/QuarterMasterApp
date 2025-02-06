import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Item } from '../item';
import { Category } from '../category';

@Component({
  selector: 'app-item-add',
  imports: [ReactiveFormsModule],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  @Input() Categories: Category[] = []
  itemForm = new FormGroup({
    
  })

 @Output() newCategoryEvent = new EventEmitter<String>();
 @Output() newItemEvent = new EventEmitter<Item>();
}
