import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class HttpServiceService {

  datas: any;
  constructor(public http: Http) { }


  getAll() {
    this.http.get('http://localhost:3500/users/').subscribe(
      data => this.datas = JSON.parse(data['_body'])
    );
  }

  create(newUser) {
    this.http.post('http://localhost:3500/users/', newUser).subscribe(
      () => this.getAll());
    console.log(newUser);
  }
  /*
    
    update() {
      this.http.put('http://localhost:3000/api/note/' + this.modal['id'], this.modal)
        .subscribe(() => this.getAll());
    }
  
    deleteRow(id) {
      this.http.delete('http://localhost:3000/api/note/' + id)
        .subscribe(() => this.getAll());
    }
  */

}
