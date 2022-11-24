import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbAccountsTransactionsJourneyComponent } from './pb-accounts-transactions-journey.component';

describe('PbAccountsTransactionsJourneyComponent', () => {
  let component: PbAccountsTransactionsJourneyComponent;
  let fixture: ComponentFixture<PbAccountsTransactionsJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PbAccountsTransactionsJourneyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbAccountsTransactionsJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
