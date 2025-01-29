import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
@Input({
  required: true,
transform:(val:string)=> val.toUpperCase()
}) name:string = 'Hamad';

@Input({
    transform: numberAttribute,
  })
  age:number = 0;


@Output() userClicked = new EventEmitter<string>();


  constructor() { }

  onUserClick(name: string) {

    this.userClicked.emit(name);
  }
  

initialCount:number = 0;
  @Output() incrementCount = new EventEmitter<number>();
  @Output() decrementCount = new EventEmitter<number>();

  increaseCount(){
  
    this.initialCount++;
    this.incrementCount.emit(this.initialCount);
  }

  decreaseCount(){
    this.initialCount--;
    this.decrementCount.emit(this.initialCount);
  }

}
