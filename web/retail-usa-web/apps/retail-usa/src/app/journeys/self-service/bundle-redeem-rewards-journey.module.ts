import { NgModule } from '@angular/core';
import {
    RedeemRewardsJourneyModule
} from '@backbase/redeem-rewards-journey';
import { RedeemRewardsConfiguration, RedeemRewardsConfigurationToken } from 'libs/redeem-rewards-journey/src/lib/redeem-rewards-journey.service';

@NgModule({
    imports: [ RedeemRewardsJourneyModule.forRoot() ],
    providers: [
        {
          provide: RedeemRewardsConfigurationToken, //<--ADD THIS PROVIDER
          useValue: <Partial<RedeemRewardsConfiguration>>{
            headerTitle: "Redeem Rewards"
          },
        }
      ],
})
export class RedeemRewardsJourneyBundleModule {
}