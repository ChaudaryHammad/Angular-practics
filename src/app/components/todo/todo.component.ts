import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Todo {
  title: string;
  description: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [TodoListComponent,FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent  implements OnInit{
  constructor() { }

  todos:Todo[] = [];
  newTodo:Todo = {
    title: '',
    description: '',
    isCompleted: false
  }

 addTodo(){
if(this.newTodo.title.trim() && this.newTodo.description.trim()){
this.todos.push({
  ...this.newTodo,isCompleted:false
});
this.newTodo={
  title:'',
  description:'',
  isCompleted:false
}
this.saveTodos();
}  
 }

 toggleTodoCompletion(index: number) {
  this.todos[index].isCompleted = !this.todos[index].isCompleted;
  this.saveTodos();
}

deleteTodo(index: number) {
  this.todos.splice(index, 1);
  this.saveTodos();
}

saveTodos(){
  localStorage.setItem('todos',JSON.stringify(this.todos));
}


ngOnInit() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    this.todos = JSON.parse(savedTodos);
  }

}

}

