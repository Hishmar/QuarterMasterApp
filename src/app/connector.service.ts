import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Category} from './category';
import { Item } from './item';
import { Observable } from 'rxjs';
import {environment} from './../environments/environment';



@Injectable({
  providedIn: 'root',

})
export class ConnectorService {  

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiUrl + "/categories");
  }

  getCategoryByName(name:String):Observable<Category[]>{
    return this.http.get<Category[]>(environment.apiUrl+ "/categories/"+name);
  }

  addCategory(category:Category){
    this.http.post(environment.apiUrl+"/categories",category).subscribe();
  }

  updateCategory(category:Category){
    this.http.put(environment.apiUrl+"/categories/"+category.name,category)
  }

  deleteCategory(category:Category){
    this.http.delete(environment.apiUrl+"/categories/"+category.name)
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.apiUrl + "/items");
  }

  getItemByName(id:bigint):Observable<Item[]>{
    return this.http.get<Item[]>(environment.apiUrl+ "/items/"+id);
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(environment.apiUrl+"/items",item);
  }

  updateItem(item:Item){
    this.http.put(environment.apiUrl+"/items/"+item.itemId,item)
  }

  deleteItem(item:Item){
    this.http.delete(environment.apiUrl+"/items/"+item.itemId)
  }
}
