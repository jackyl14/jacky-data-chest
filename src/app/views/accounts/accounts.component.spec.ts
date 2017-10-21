import { TestBed, async } from '@angular/core/testing';
import { AccountsComponent } from './accounts.component';
describe('AccountsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AccountsComponent);
    const accounts = fixture.debugElement.componentInstance;
    expect(accounts).toBeTruthy();
  }));
  it('should render a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AccountsComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Accounts');
  }));
});
