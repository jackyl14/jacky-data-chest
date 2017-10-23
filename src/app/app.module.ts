import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import {
  AccountsComponent,
  AccountDetailsComponent
} from './views';


@NgModule({
  declarations: [
    AccountsComponent,
    AppComponent,
    AccountDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
