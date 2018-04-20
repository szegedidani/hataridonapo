import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Method, Pattern } from 'babel-types';
import { PatternValidator } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  specialChars: any = /[^A-Za-z0-9]/;

  constructor(public HttpService: HttpServiceService) {
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.HttpService.create();
  }

}

