import { Component, OnInit, Input } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.pug',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit {
  dates: object = {
    title: '',
    date: '',
    description: ''
  };
  usersDates: any;

  constructor(public HttpService: HttpServiceService) {
  }

  showDates() {
    this.usersDates = this.HttpService.getDates();
    // this.HttpService.userDatas
  }

  addDate(input) {
    input.userId = this.HttpService.userDatas.userId;
    this.HttpService.postDate(input);
    this.showDates();
    console.log(input);
  }

  ngOnInit() {
  }



}
