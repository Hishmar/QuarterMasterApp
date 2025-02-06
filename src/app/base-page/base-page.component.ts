import { Component, inject } from '@angular/core';
import {ConnectorService} from '../connector.service';
import { Category } from '../category';
import { Item } from '../item';

@Component({
  selector: 'app-base-page',
  imports: [],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent {
  categories: Category[] = []
  items: Item[]=[]
  connector = inject(ConnectorService);

  ngOnInit(){
    this.getCategories();
    this.getItems();
  }

  getCategories(){
    this.connector.getCategories().subscribe(response =>{
      this.categories = response;
    });
  };
  getItems(){
    this.connector.getItems().subscribe(response => {
      this.items = response;
    })
  }
  createItem(newItem: Item){
    this.connector.addItem(newItem).subscribe
  }

  showCategories(){
    console.log(this.categories)
  }

}
