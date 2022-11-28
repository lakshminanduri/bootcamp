import { NgModule, Provider } from '@angular/core';
import {
  AccountAliasDisplayingLevel,
  AccountsCommunicationService,
  AccountsPaymentsCommunication,
  AccountsStateCommunicationService,
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
  ACCOUNTS_TRANSACTIONS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_MESSAGES_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_TRANSACTIONS_BASE_PATH,
  ACCOUNTS_TRANSACTIONS_JOURNEY_PAYMENT_BATCH_BASE_PATH,
  ProductKindUri,
} from '@backbase/accounts-transactions-journey-ang';
import { PubSubService } from '@backbase/foundation-ang/web-sdk';
import {
  AccountsCommunicationService as AccountsCommunicationServiceImplementation,
  AccountsStateCommunicationService as AccountsStateCommunicationServiceImplementation,
  AccountsInitiatePaymentCommunication,
} from '@backbase/retail/feature/communication';
import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_CATEGORIES_MANAGEMENT_BASE_PATH,
  APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
  APP_MESSAGES_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
  APP_PAYMENT_BATCH_BASE_PATH,
} from '../../service-paths.module';
import { PbAccountsTransactionsJourneyModule } from '@backbase/pb-accounts-transactions-journey'
import { environment } from '../../../environments/environment';
import { RetailAppRemoteConfig } from '../../remote-config/remote-config';
import { RemoteConfigService } from '@backbase/remote-config-ang';

const AccountsTransactionsConfigProvider: Provider = {
  provide: AccountsTransactionsJourneyConfigurationToken,
  useFactory: (
    remoteConfig: RemoteConfigService<RetailAppRemoteConfig>,
  ): Partial<AccountsTransactionsJourneyConfiguration> => ({
    apiKey: environment.googleApiKey,
    showCheckImages: true,
    disputeTopicId: '',
    inquireTopicId: '',
    showAccountIcons: false,
    enableDisputeAndInquiry: false,
    productKindsWithExternalDetailsPage: ProductKindUri.LOAN,
    accountAliasDisplayLevel: AccountAliasDisplayingLevel.USER,
    enableManageAccounts: remoteConfig.getValue('show_manage_accounts'),
  }) as Partial<AccountsTransactionsJourneyConfiguration>,

  deps: [RemoteConfigService],
};


@NgModule({
  imports: [PbAccountsTransactionsJourneyModule],
  providers: [
    AccountsTransactionsConfigProvider,
    { provide: AccountsPaymentsCommunication, useExisting: AccountsInitiatePaymentCommunication },
    { provide: AccountsCommunicationService, useExisting: AccountsCommunicationServiceImplementation },
    { provide: AccountsStateCommunicationService, useExisting: AccountsStateCommunicationServiceImplementation },
    PubSubService,
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_CATEGORIES_MANAGEMENT_BASE_PATH,
      useExisting: APP_CATEGORIES_MANAGEMENT_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
      useExisting: APP_FINANCIAL_INSTITUTION_MANAGER_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_MESSAGES_BASE_PATH,
      useExisting: APP_MESSAGES_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: ACCOUNTS_TRANSACTIONS_JOURNEY_PAYMENT_BATCH_BASE_PATH,
      useExisting: APP_PAYMENT_BATCH_BASE_PATH,
    },
  ],
})
export class AccountsTransactionsJourneyBundleModule { }
