import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { HeroesComponent } from './components/hero/heroes/heroes.component';
import { ComboComponent } from './components/combo/combo.component';



@NgModule({
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    HeroesComponent,
    ComboComponent
  ],
  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  console.log(document.getElementsByTagName('base')[0].href);
  return document.getElementsByTagName('base')[0].href;
}
