import { Injectable } from '@angular/core';
import {Book} from './book';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  books:Book[]=[];
  
  constructor() { }
  id:number=0;
  id1:number=0;
  create(b:Book){
    ++this.id;
    b.id=this.id;
    this.books.push(b);
  }
  Create(c:Book){
    ++this.id1;
    c.id1=this.id1;
    this.books.push(c);
  }
}
