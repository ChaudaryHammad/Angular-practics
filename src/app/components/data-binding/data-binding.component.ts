import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from "../user/user-list/user-list.component";

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, UserListComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string = "Hammad";
  rollNumber:number = 123456;
  isActive:boolean = true;
  currentDate:Date = new Date();
  myPlaceholder:string = "Enter your name";
  divClassName:string = "bg-green-500";
  selectedValue:string = "";
  currentBtn:string = '';
  count:number = 0;
  constructor(){
    console.log(this.firstName);
  }

  showWelcomeMessage(data:string){
   this.firstName = data;
  }

  onCityChange(){
    console.log('city');
  }

  getClick(name:string){
    this.currentBtn = name;
  }

  increaseCount(val:number){
 this.count=val;
  }

  decreaseCount(val:number){
    this.count=val;
  }


}
