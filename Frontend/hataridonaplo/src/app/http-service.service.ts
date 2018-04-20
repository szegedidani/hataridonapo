import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpServiceService {
  datas: any;
  adat: any;
  modal: any;
  constructor(public http: Http) { }

  getAll() {
    this.http.get('http://localhost:3000/api/note').subscribe(
      data => this.datas = JSON.parse(data['_body'])
    );
  }

  create() {
    this.http.post('http://localhost:3000/api/note/', this.adat).subscribe(
      () => this.getAll());

  }
  update() {
    this.http.put('http://localhost:3000/api/note/' + this.modal['id'], this.modal)
      .subscribe(() => this.getAll());
  }

  deleteRow(id) {
    this.http.delete('http://localhost:3000/api/note/' + id)
      .subscribe(() => this.getAll());
  }

}

