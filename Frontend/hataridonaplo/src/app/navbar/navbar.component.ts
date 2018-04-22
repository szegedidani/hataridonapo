import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Method, Pattern } from 'babel-types';
import { PatternValidator } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  specialChars: any = /[^A-Za-z0-9]/;
  registerModel: object = {
    userName: '',
    userEmail: '',
    password: '',
    passwordRe: ''
  };

  constructor(public HttpService: HttpServiceService) {
  }
  onSubmit = function () {
    this.HttpService.create(this.registerModel);
    this.HttpService.getAll();
  };

  ngOnInit(): void {
  }

}

