export class Book {
    
        
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
    constructor(id:number,
        name:string,
        dob:Date,
        address:string,
        phone:number,
        id1:number,
        degree:string,
        mark:number,
        stream:string,
        college:string){
        this.id=id;
        
       this.name=name;
       this.dob=dob;
       this.address=address;
       this.phone=phone;
       this.id1=id1;
       this.degree=degree;
       this.mark=mark;
       this.stream=stream;
       this.college=college;
    }
}
