import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountDetailService } from '../../services/account-detail.service';
import { EnergyDailyList, EnergySummary } from '../../types';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  providers: [AccountDetailService]
})
export class AccountDetailsComponent implements OnInit {

  public summary: EnergySummary;
  public dailies: EnergyDailyList;

  constructor(
    private AccountDetailService: AccountDetailService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.summary = null;
    this.dailies = null;
  }

  public ngOnInit() {
    const accountId = this.ActivatedRoute.snapshot.params.accountId;
    console.log("accountId", this.ActivatedRoute);
    this.AccountDetailService.getSummary(accountId).subscribe(summary => {
      this.summary = summary;
      console.log("summary", this.summary);
    });
    this.AccountDetailService.getDailies(accountId).subscribe(dailies => {
      this.dailies = dailies;
      console.log("dailies", this.dailies);
    })
  }
}
