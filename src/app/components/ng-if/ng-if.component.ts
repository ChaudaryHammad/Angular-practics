import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  divVisible:boolean = false;

num1:string = '';
num2:string = '';

cityList:string[] = ['Lahore', 'Karachi', 'Islamabad', 'Peshawar', 'Quetta'];
empList:any[] = [
  {
    id: 1,
    name: 'Ali',
    age: 25
  },
  {
    id:2,
    name: 'Ahmed',
    age: 30
  },
  {
    id:3,
    name: 'Asad',
    age: 35
  },
  {
    id:4,
    name: 'Kamran',
    age: 40
  },
  {
    id:5,
    name: 'Kashif',
    age: 45
  }
]
  constructor(){}
  hideDiv(){
    this.divVisible =false;
  }

  showDiv(){
    this.divVisible =true;
  }

  divBg:string = "bg-gray-500";

  addGreen(bg:string){
this.divBg = bg;
  }
  addBlue(bg:string){
    this.divBg = bg;
  }

  isChecked:boolean = false;

  bgCol:string = 'yellow';

  divStyle:string = "";

  fName = signal<string>("Muhammad");
  lName = signal<string>("Ali");
}
