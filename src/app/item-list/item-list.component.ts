import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  @Input() itemArray: Item[] = []
}
