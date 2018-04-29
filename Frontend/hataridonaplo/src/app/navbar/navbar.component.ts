import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Method, Pattern } from 'babel-types';
import { PatternValidator } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  registerModel: object = {
    userName: '',
    userEmail: '',
    password: '',
    passwordRe: ''
  };

  loginModel: object = {
    userEmail: '',
    password: ''
  };

  constructor(public HttpService: HttpServiceService) {
  }
  registerUser = function () {
    this.HttpService.addUser(this.registerModel);
  };


  loginUser = function () {
    this.HttpService.logIn(this.loginModel);
  };

  ngOnInit() {
  }


}

