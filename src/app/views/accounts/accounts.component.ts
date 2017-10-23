import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../services';
import { Account } from '../../types';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [AccountService]
})
export class AccountsComponent implements OnInit {

  public accounts: Account[];

  constructor(
    private AccountService: AccountService,
    private Router: Router
  ) {
    this.accounts = null;
  }

  public ngOnInit(): void {
    this.AccountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  public onAccountClick(accountId: number): void {
    this.Router.navigate(['/accounts/', accountId]);
  }
}
