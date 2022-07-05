import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryDf = 'Ha Noi';
  genderDf =  'male';
  countryList = [
    {name: 'Ha Noi'},
    {name: 'Ha Nam'},
    {name: 'Hai Phong'},
  ];

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl(),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
  });

  get password() {
    return this.registerForm.get('password');
  }
  get confirmpassword() {
    return this.registerForm.get('confirmpassword');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get phone() {
    return this.registerForm.get('phone');
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
