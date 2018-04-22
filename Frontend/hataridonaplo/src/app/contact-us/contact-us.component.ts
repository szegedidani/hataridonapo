import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.pug',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  lat = 47.4614391;
  lng = 19.05303779999997;

  constructor() { }

  ngOnInit() {
  }

}
