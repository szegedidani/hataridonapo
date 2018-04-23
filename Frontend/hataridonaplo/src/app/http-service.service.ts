import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { AppModule } from './app.module';
import { Router } from '@angular/router';

@Injectable()
export class HttpServiceService {
  userDatas: any;
  datas: any;
  userDates: any;
  dates: any;

  constructor(public http: Http, private router: Router) {
    this.userDatas = this.datas;
  }

  addUser(newUser) {
    this.http.post('http://localhost:3500/users/', newUser).subscribe(
      data => this.datas = JSON.parse(data['_body'])
    );
  }

  logIn(input) {
    this.http.post('http://localhost:3500/users/', input).subscribe(
      data => this.datas = JSON.parse(data['_body'])
    );
    this.userDatas = this.datas;
    if (this.userDatas.loggedin) {
      this.router.navigate(['/', 'deadline']);
    } else
      if (!this.userDatas.loggedin) { alert('Helytelen email cím, vagy jelszó!'); }
  }


  postDate(input) {
    this.http.post('http://localhost:3500/dates/', input).subscribe(
      data => this.datas = JSON.parse(data['_body'])
    );
  }


  getDates() {
    this.http.get(`http://localhost:3500/dates/${this.userDatas.userId}`).subscribe(
      data => this.dates = JSON.parse(data['_body'])
    );
    return this.dates;
  }

}
