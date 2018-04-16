import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Határidőnapló';
}
