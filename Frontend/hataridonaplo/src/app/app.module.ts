import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { KnowlageComponent } from './knowlage/knowlage.component';
import { RestfulApiComponent } from './restful-api/restful-api.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: "full" },
  { component: MainPageComponent, path: 'main-page' },
  { component: ProfilComponent, path: 'profil' },
  { component: KnowlageComponent, path: 'knowlage' },
  { component: RestfulApiComponent, path: 'restful-api' },
  { component: ContactUsComponent, path: 'contact-us' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    ProfilComponent,
    KnowlageComponent,
    RestfulApiComponent,
    ContactUsComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
