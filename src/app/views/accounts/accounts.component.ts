import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../services';
import { Account } from '../../types';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [AccountService]
})
export class AccountsComponent {

  public accounts: Account[];

  constructor(
    private AccountService: AccountService,
    private Routes: Router
  ) {
    this.accounts = null;
  }

  public ngOnInit() {
    this.AccountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
      console.log(accounts);
    });
  }

  public onAccountClick(accountId: number) {
    console.log(`onAccountClick: ${accountId}`);
  }
}
