import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { AppModule } from './app.module';
import { Router } from '@angular/router';
// import { reject } from 'q';
// import { resolve } from 'dns';


@Injectable()
export class HttpServiceService {
  userDatas: any = '';
  datas: any;
  userDates: any;
  dates: any;

  constructor(public http: Http, private router: Router) {
  }

  addUser(newUser) {
    this.http.post('http://localhost:3500/users/', newUser).subscribe(
      data => this.datas = JSON.parse(data['_body'])
    );
  }

  logIn(input) {
    this.http.post('http://localhost:3500/users/', input).subscribe(
      data => this.datas = JSON.parse(data['_body']),
      err => console.error('nemjó'),
      () => {
        console.log(this.datas);
        if (this.datas.loggedin) {
          this.getDates();
          this.router.navigate(['/', 'deadline']);
        } else
          if (this.datas.loggedin === false) { alert('Helytelen email cím, vagy jelszó!'); }
      }
    );

  }



  postDate(input) {
    this.http.post('http://localhost:3500/dates/', input).subscribe(
      data => this.datas = JSON.parse(data['_body']),
      err => {
        console.error('Valami nem jóó');
      },
      () => {
        this.getDates();
      }
    );
  }


  getDates() {
    this.http.get(`http://localhost:3500/dates/${this.datas.userId}`).subscribe(
      data => this.dates = JSON.parse(data['_body']),
      err => { console.error('Valami nem jó'); },
      () => {
        this.userDates = this.dates;
      }
    );
    return this.dates;
  }

  delete(date) {
    this.http.delete(`http://localhost:3500/dates/${date._id}`).subscribe(
      () => this.getDates());
  }

  updateDate(date) {
    this.http.put(`http://localhost:3500/dates/${date._id}`, date)
      .subscribe(() => this.getDates());
  }


}
