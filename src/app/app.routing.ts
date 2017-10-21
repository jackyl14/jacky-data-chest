import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccountsComponent,
  AccountDetailsComponent
} from './views';

const appRoutes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/:accountId', component: AccountDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
