import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Account } from '../types';

declare function require(url: string);

@Injectable()
export class AccountService {

  constructor() {}

  public getAll(): Observable<Account[]> {
    const accountData: Account[] = require('../mock/accounts.json');
    return Observable.of(<Account[]>accountData);
  }

}
