import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedeemRewardsComponent } from './redeem-rewards/redeem-rewards.component';
import { provideRoutes, Route, RouterModule } from '@angular/router'; //<-- ADD THIS LINE
import { PbRedeemRewardsJourneyService } from './redeem-rewards-journey.service';

const defaultRoute: Route = {  //<-- ADD THIS ROUTE OBJECT
  path: '',
  component: RedeemRewardsComponent,
};

@NgModule({
  imports: [CommonModule],
  declarations: [RedeemRewardsComponent],
  providers:[PbRedeemRewardsJourneyService]
})
export class RedeemRewardsJourneyModule {
  static forRoot(data: { [key: string]: unknown; route: Route } = { route: defaultRoute }) { //<-- ADD STATIC METHOD
    return {
      ngModule: RedeemRewardsJourneyModule,
      providers: [provideRoutes([data.route])],
    };
  }
}
