import { Component } from '@angular/core';
import { RemoteConfigService } from '@backbase/remote-config-ang';
import { RetailAppRemoteConfig } from '@backbase/retail-loans-journey-ang/lib/models/remote-config.model';
import { PERMISSIONS } from '../../../auth/permissions';
import { QuickActionLink } from '../quick-actions.component';

@Component({
  selector: 'bb-accounts-transactions-journey-wrapper',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <bb-alert-ui
            *ngIf="remoteConfigParameters.showMaintenanceBanner"
            modifier="warning"
            title="Maintenance alert"
            i18n-title="@@accounts.remote-config-banner.title"
            dismissible="true"
          >
            <p i18n="@@accounts.remote-config-banner.text">
              {{ remoteConfigParameters.maintenanceBannerText }}
            </p>
          </bb-alert-ui>
        </div>
        <div class="col-md-8">
          <router-outlet></router-outlet>
        </div>
        <div class="col-md-4 pt-5">
          <div class="mb-4 mt-5">
            <bb-campaign-space-ang name="bb-campaign-space-ang-0"></bb-campaign-space-ang>
          </div>
          <div class="card bb-block--xl">
            <bb-quick-transfer-journey></bb-quick-transfer-journey>
          </div>
          <div class="card">
            <bb-quick-actions [links]="quickActionLinks"></bb-quick-actions>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AccountsTransactionsJourneyWrapperComponent {
  readonly remoteConfigParameters = {
    showMaintenanceBanner: this.remoteConfigService.getValue('show_maintenance_banner'),
    maintenanceBannerText: this.remoteConfigService.getValue('maintenance_banner_text'),
  };

  quickActionLinks: QuickActionLink[] = [
    {
      menuIcon: 'settings',
      title: $localize`:Link Title|Manage accounts@@accounts.quick-actions.span.manageAccounts:Manage Accounts`,
      url: '/my-accounts/manage',
      permission: PERMISSIONS.canViewMyAccounts,
    },
    {
      menuIcon: 'flight',
      title: $localize`:Link Title|Set travel notice@@accounts.quick-actions.span.setTravelNotice:Set Travel Notice`,
      url: '/self-service/manage-cards/travel-notice',
      permission: PERMISSIONS.canViewManageCards,
    },
    {
      menuIcon: 'receipt',
      title: $localize`:Link Title|Pay a bill@@accounts.quick-actions.span.payABill:Pay a Bill`,
      url: '/billpay/pay-bills',
      permission: PERMISSIONS.canViewPayABill,
    },
    {
      menuIcon: 'description',
      title: $localize`:Link Title|Download statements@@accounts.quick-actions.span.downloadStatements:Download Statements`,
      url: '/self-service/download-statements',
      permission: PERMISSIONS.canViewAccountStatements,
    },
    {
      menuIcon: 'notifications-active',
      title: $localize`:Link Title|Manage notifications@@accounts.quick-actions.span.manageNotifications:Manage Notifications`,
      url: '/self-service/product-list/manage-notifications',
      permission: PERMISSIONS.canViewManageNotifications,
    },
    {
      menuIcon: 'room',
      title: $localize`:Link Title|Find branches and ATMS@@accounts.quick-actions.span.findBranchedAndATMS:Find Branches and ATMS`,
      url: '/more/find-us',
      permission: PERMISSIONS.canViewPlaces,
    },
  ];

  constructor(private remoteConfigService: RemoteConfigService<RetailAppRemoteConfig>) {}
}
