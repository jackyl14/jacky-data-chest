import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import {
  AccountsComponent,
  AccountDetailsComponent
} from './views';

import { KeysPipe } from './pipes';

@NgModule({
  declarations: [
    AccountsComponent,
    AppComponent,
    AccountDetailsComponent,
    KeysPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
