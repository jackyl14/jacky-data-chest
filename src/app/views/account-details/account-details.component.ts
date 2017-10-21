import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  private accountId: number;

  constructor(private ActivatedRoute: ActivatedRoute) {
    this.accountId = null;
  }

  public ngOnInit() {
    this.accountId = this.ActivatedRoute.snapshot.params.id;
  }



}
