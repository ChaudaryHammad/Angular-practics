import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
constructor(){
}

// userObj:any = {
//   firstName: '',
//   lastName: '',
//   city:'bangalore',
//   term:false,
// }

// submitForm(){
//   const formValues = this.userObj;
//   console.log(formValues);
// }



userForm:FormGroup = new FormGroup({
  firstName: new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]),
  lastName: new FormControl(''),
  city: new FormControl('hyderabad'),
  term: new FormControl(''),
})


userFormSubmit(){
  const formValues = this.userForm.value;
  console.log(formValues);
}


}
