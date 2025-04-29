import { Component, inject } from '@angular/core';
import {ConnectorService} from '../connector.service';
import { Category } from '../category';
import { Item } from '../item';
import { ItemAddComponent } from "../item-add/item-add.component";
import { ItemListComponent } from '../item-list/item-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-base-page',
  imports: [ItemAddComponent, ItemListComponent, MatSidenavModule, CategoryListComponent],
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
  currentView: string = "item-add"
  changeView(newView:string){
    this.currentView = newView
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
    this.connector.addItem(newItem).subscribe()
  }
  createCategory(newCat: Category){
    this.connector.addCategory(newCat)
    this.getCategories()
  }

  showCategories(){
    console.log(this.categories)
  }

}
