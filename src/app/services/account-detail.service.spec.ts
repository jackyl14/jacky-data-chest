import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AccountDetailService } from './account-detail.service';

describe('AccountDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AccountDetailService]
    });
  });

  it('should be created', inject([AccountDetailService], (service: AccountDetailService) => {
    expect(service).toBeTruthy();
  }));
});
