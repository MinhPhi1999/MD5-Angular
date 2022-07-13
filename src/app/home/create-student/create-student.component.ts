import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {HttpClient} from '@angular/common/http';
import {ClassService} from '../../service/class.service';
import {Class} from '../../model/class';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  // @ts-ignore
  createForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    score: new FormControl(),
    clazzId: new FormControl()
  });
  obj: any;
  listClass: Class[];
  constructor(private httpClient: HttpClient,
              private studentService: StudentService,
              private classService: ClassService) { }

  ngOnInit() { this.classService.findAll().subscribe((data) => {
    this.listClass = data;
  });
  }
  add() {
    console.log(this.createForm.value);
    // @ts-ignore
    this.obj = {
      name: this.createForm.value.name,
      age: this.createForm.value.age,
      score: this.createForm.value.score,
      clazz: {
        id: this.createForm.value.clazzId,
      }
    };
    this.studentService.save(this.obj).subscribe(() => {
      alert('thành công');
    }, error => {
      console.log('lỗi');
    });
  }

}
