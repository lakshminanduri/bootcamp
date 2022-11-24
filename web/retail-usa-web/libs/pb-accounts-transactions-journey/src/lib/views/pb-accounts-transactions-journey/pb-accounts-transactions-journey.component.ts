import { Component } from '@angular/core';
import { AccountsDetailsTabComponent as BbAccountsDetailsTabComponent } from '@backbase/accounts-transactions-journey-ang';
import {
  AccountDetailsService,
  AccountsExternalInfoService,
} from '@backbase/accounts-transactions-journeys-shared-data-account-ang';

@Component({
  selector: 'bb-accounts-details-tab-container',
  templateUrl: './pb-accounts-transactions-journey.component.html',
  styleUrls: ['./pb-accounts-transactions-journey.component.scss'],
  providers: [AccountDetailsService, AccountsExternalInfoService],
})
export class PbAccountsTransactionsJourneyComponent extends BbAccountsDetailsTabComponent {}