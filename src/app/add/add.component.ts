import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id:number;
        name:string;
        dob:Date;
        address:string;
        phone:number;
        id1:number;
        degree:string;
        mark:number;
        stream:string;
        college:string;

  newBook:Book;
  

  constructor(private svc:DataService) { }

  ngOnInit() {
  }
  createData(){

    this.newBook= new Book(this.id,this.name,this.dob,this.address,this.phone,this.id1,this.degree,this.mark,this.stream,this.college);
    this.svc.create(this.newBook);
    this.reset();
  }
  reset(){
    this.name ="";
    this.dob;
    this.address = "";
    this.phone=0;
    
    this.degree="";
    this.mark=0;
    this.stream="";
    this.college="";
  }



}
