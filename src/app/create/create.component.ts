import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TuorService} from '../service/tuor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formCreate = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    desc: new FormControl(),
  });
  obj: any;
  constructor(private httpClient: HttpClient,
              private tourService: TuorService) { }

  ngOnInit() {
  }
  create() {
    console.log(this.formCreate.value);
    // @ts-ignore
    this.obj = {
      title: this.formCreate.value.title,
      price: this.formCreate.value.price,
      desc: this.formCreate.value.desc,
    };
    this.tourService.save(this.obj).subscribe(() => {
      alert('thành công');
    }, error => {
      console.log('lỗi');
    });
  }

}
