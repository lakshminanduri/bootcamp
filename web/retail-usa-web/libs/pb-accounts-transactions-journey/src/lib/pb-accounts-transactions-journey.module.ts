import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsTransactionsJourneyModule } from '@backbase/accounts-transactions-journey-ang';
import { PbAccountsTransactionsJourneyComponent } from './views/pb-accounts-transactions-journey/pb-accounts-transactions-journey.component';
import { extendedRoute } from './route';
import { RouterModule } from '@angular/router';
import { IconModule } from '@backbase/ui-ang/icon';
import { ButtonModule } from '@backbase/ui-ang/button';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    ButtonModule,
    AccountsTransactionsJourneyModule.forRoot({ route: extendedRoute })],
  declarations: [PbAccountsTransactionsJourneyComponent],
})
export class PbAccountsTransactionsJourneyModule { }
