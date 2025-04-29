import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../category';
import { units,Unit } from '../units';
@Component({
  selector: 'app-category-add',
  imports: [ReactiveFormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  units = units;
  @Input() initialName:String = ''
  categoryForm = new FormGroup({
    name: new FormControl(this.initialName, [Validators.required]),
    unit: new FormControl<Unit>(units[0]), 
    density: new FormControl(),
    estimatedExpiryTime: new FormControl(7)
  })
  createCategory(){
    let newCat:Category = {
      name: this.categoryForm.value.name as string,
      defaultUnit: this.categoryForm.value.unit?.measurement as string,
      density: this.categoryForm.value.density,
      estimatedExpiryTime: this.categoryForm.value.estimatedExpiryTime as number,
      tags:[]
    }
    this.newCategoryEvent.emit(newCat)
  }

  @Output() newCategoryEvent = new EventEmitter<Category>();
}
