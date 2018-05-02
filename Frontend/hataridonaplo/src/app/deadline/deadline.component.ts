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
  keys: Array<string> = [
    'title',
    'date',
    'description'
  ];

  dates: object = {
    title: '',
    date: '',
    description: ''
  };

  modal: object = {
    title: '',
    date: '',
    description: ''
  };

  toUpdate: any;

  usersDates: object;


  constructor(public HttpService: HttpServiceService) {
    this.showDates();
  }

  showDates() {
    this.HttpService.getDates();
    setTimeout(() => {
      this.usersDates = this.HttpService.dates;
    }, 500);

  }

  addDate(input) {
    input.userId = this.HttpService.datas.userId;
    this.HttpService.postDate(input);
    this.showDates();
  }

  deleteDate(date) {
    this.HttpService.delete(date);
  }

  ngOnInit() {
  }

  getUpdateId(date) {
    this.modal = date;
  }

  updateDate(modal) {
    modal.userId = this.HttpService.datas.userId;
    this.HttpService.updateDate(modal);
  }

}
