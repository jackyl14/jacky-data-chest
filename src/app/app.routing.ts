import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './views/accounts';

const appRoutes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'accounts', component: AccountsComponent }
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
