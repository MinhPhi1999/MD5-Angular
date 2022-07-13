import { Component, OnInit } from '@angular/core';
import {ClassService} from '../../service/class.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  listClass: any;
  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.classService.findAll().subscribe((data) => {
      console.log(data);
      this.listClass = data;
    }, error => {
      console.log('lỗi');
    });
  }

}
