import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: Book;
  bookId:number;
  bookId1:number;

  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id1'));
    this.svc.books.forEach(element => {
      if(element.id == this.bookId){
        this.book = element;
      }
    });
    this.svc.books.forEach(element => {
      if(element.id1 == this.bookId1){
        this.book = element;
      }
    });
  }

  editData() {
    this.svc.books[this.svc.books.indexOf(this.book)] = this.book;
  }
  editEdu(){
    this.svc.books[this.svc.books.indexOf(this.book)] = this.book;
  }

}