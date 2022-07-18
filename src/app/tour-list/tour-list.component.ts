import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TuorService} from '../service/tuor.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  listTour: any;
  constructor(private httpClient: HttpClient,
              private tourService: TuorService) { }

  ngOnInit() {
    this.tourService.findAll().subscribe((data ) => {
      console.log(data);
      this.listTour = data;
    }, error => {
      console.log('lỗi');
    });
  }

}
