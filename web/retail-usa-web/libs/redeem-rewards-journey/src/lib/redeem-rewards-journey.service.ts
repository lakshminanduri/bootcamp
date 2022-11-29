import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';

export const RedeemRewardsConfigurationToken = new InjectionToken<RedeemRewardsConfiguration>(
  'RedeemRewardsServiceConfig injection token',
);

export interface RedeemRewardsConfiguration {
  [x:string]:string;
}

export const DEFAULT_REDEEM_REWARDS_CONFIG: RedeemRewardsConfiguration = {
  headerTitle :'Redeem Rewards'
};

@Injectable({
  providedIn: 'root',
})
export class PbRedeemRewardsJourneyService {
  readonly serviceConfig: RedeemRewardsConfiguration;
  constructor(
    @Optional() @Inject(RedeemRewardsConfigurationToken) serviceConfig: Partial<RedeemRewardsConfiguration> | null,
  ) {
    this.serviceConfig = { ...DEFAULT_REDEEM_REWARDS_CONFIG, ...serviceConfig };
  }
}