import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  states = ['MP', 'Maharashtra', 'Rajasthan'];
  cities: { [key: string]: string[] } = {
    MP: ['Indore', 'Bhopal', 'Gwalior'],
    Maharashtra: ['Mumbai', 'Pune', 'Nasik'],
    Rajasthan: ['Jaipur', 'Kota', 'Jodhpur']
  };

  userForm: FormGroup;
  submitted = false;
  users: any[] = [];;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    const user = {
      fullName: this.userForm.value.fullName,
      age: this.userForm.value.age,
      gender: this.userForm.value.gender,
      state: this.userForm.value.state,
      city: this.userForm.value.city
    };

    this.users.push(user);
    this.userForm.reset();
    this.submitted = false;
  }

}

