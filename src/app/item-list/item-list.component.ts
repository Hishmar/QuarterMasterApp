import { Component, Input } from '@angular/core';
import { Item } from '../item';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-item-list',
  imports: [MatTableModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  @Input() itemArray: Item[] = []
  displayedColumns: string[] = ['category','expiryStart','expectedExpiry']
}
