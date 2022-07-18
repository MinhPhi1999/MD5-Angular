import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TuorService} from '../service/tuor.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tour: any;
  id: string;
  constructor(private httpClient: HttpClient,
              private tourService: TuorService,
              private activatedRoute: ActivatedRoute) {
  this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  this.id = paramMap.get('id');
});
}

  ngOnInit() {
    this.tourService.findById(this.id).subscribe((data ) => {
      console.log(data);
      this.tour = data;
    }, error => {
      console.log('lỗi');
    });
  }

}
