import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minh';
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Laos'},
    {id: 3, name: 'Indonesia'}
  ];
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
  });
  onSubmit() {
    console.log(this.contactForm.value);
  }
}
