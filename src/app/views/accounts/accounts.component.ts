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
  public hoveredAccountId: number;

  constructor(
    private AccountService: AccountService,
    private Router: Router
  ) {
    this.accounts = null;
    this.hoveredAccountId = null;
  }

  public ngOnInit(): void {
    this.AccountService.getAll().subscribe(accounts => {
      this.accounts = accounts;
      console.log(accounts);
    });
  }

  public onAccountClick(accountId: number): void {
    console.log(`onAccountClick: ${accountId}`);
    this.Router.navigate(['/accounts/', accountId]);
  }

  public onMouseEnter(accountId: number): void {
    console.log(`onMouseOver: ${accountId}`);
    this.hoveredAccountId = accountId;
  }

  public onMouseLeave(): void {
    console.log("onMouseLeave");
    this.hoveredAccountId = null;
  }
}
