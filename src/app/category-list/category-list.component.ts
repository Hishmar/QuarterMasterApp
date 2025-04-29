import { Component, Input } from '@angular/core';
import { Category } from '../category';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-category-list',
  imports: [MatTableModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  @Input() categories: Category[]=[]
  displayedColumns: string[] = ['name', 'defaultUnit', 'estimatedExpiryTime']
}
