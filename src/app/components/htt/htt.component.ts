import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, resource } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-htt',
  imports: [CommonModule,JsonPipe, UpperCasePipe,NaPipe],
  templateUrl: './htt.component.html',
  styleUrl: './htt.component.css'
})
export class HttComponent {
constructor(private http:HttpClient){}


studentData:any = {
  name:"John",
  age:25,
  email:"jhon@gmail.com",
 
}
loading:boolean = false;
UsersList:any = [];
currentDate = new Date();
salary:string=""
getUsers(){
  this.loading = true;
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
   this.UsersList = data;
    this.loading = false;
  },
  (error)=>{
    console.log(error);
    this.loading= false;
  }
)
}

isAdmin:boolean = true;
Users = resource({
  loader:()=>{
    return fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json() as Promise<any>).catch((error)=> console.log(error));
  }
});
}

  