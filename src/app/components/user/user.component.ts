import { Component } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-user',
  imports: [UserListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  processData(text:string) {
    alert(text);
   
  }

  handleNotification(message: string) {
    console.log('Received from child:', message);
  }
}
