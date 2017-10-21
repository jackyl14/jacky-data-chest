import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { EnergyDailyList, EnergySummary } from '../types';

@Injectable()
export class AccountDetailService {
  constructor(private HttpClient: HttpClient) { }

  public getSummary(accountId: number): Observable<EnergySummary> {
    const url = `${environment.baseUrl}${environment.apiPath}/subscriptions`
                 + `/homescore/${accountId}/summary`;
    return this.HttpClient.get(url).map(summaries => {
      return <EnergySummary>summaries;
    });
  }

  public getDailies(accountId: number): Observable<EnergyDailyList> {
    const url = `${environment.baseUrl}${environment.apiPath}/subscriptions`
                  + `/homescore/${accountId}/energy/usage/daily`;
    return this.HttpClient.get(url).map(dailies => {
      return <EnergyDailyList>dailies;
    });
  }
}
