import { Route } from '@angular/router';
import {
  AccountsTransactionsJourneyComponent,
  AccountsListComponent,
  AccountsManageComponent,
  AccountsManageGuardService,
  TransactionsListComponent,
  TransactionDetailsComponent,
  AccountInfoViewComponent,
} from '@backbase/accounts-transactions-journey-ang';
import { PbAccountsTransactionsJourneyComponent } from './views/pb-accounts-transactions-journey/pb-accounts-transactions-journey.component';

const tabTitles = {
  myAccounts: () => $localize`:My Accounts title@@accounts.transactions.journey.myAccounts.title:My Accounts`,
  transactions: () => $localize`:Transactions title@@accounts.transactions.journey.transactions.title:Transactions`,
  list: () => $localize`:List tab title@@accounts.transactions.journey.list.tab.title:Transactions`,
  details: () => $localize`:Details tab title@@accounts.transactions.journey.details.tab.title:Details`,
};

export const extendedRoute: Route = {
  path: '',
  component: AccountsTransactionsJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: AccountsListComponent,
      data: { title: tabTitles.myAccounts() },
    },
    {
      path: 'manage',
      component: AccountsManageComponent,
      canActivate: [AccountsManageGuardService],
    },
    {
      path: 'transactions',
      component: PbAccountsTransactionsJourneyComponent,
      data: { title: tabTitles.transactions() },
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'list',
          component: TransactionsListComponent,
          data: { title: tabTitles.list() },
          children: [
            {
              path: 'detail',
              component: TransactionDetailsComponent,
            },
          ],
        },
        {
          path: 'details',
          component: AccountInfoViewComponent,
          data: { title: tabTitles.details() },
        },
      ],
    },
  ],
};