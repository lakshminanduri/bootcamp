import { Component, OnInit } from '@angular/core';
import { PbRedeemRewardsJourneyService } from '../redeem-rewards-journey.service'
@Component({
  selector: 'bb-redeem-rewards',
  templateUrl: './redeem-rewards.component.html',
  styleUrls: ['./redeem-rewards.component.scss'],
})
export class RedeemRewardsComponent implements OnInit {
  title:string
  constructor(private PbRedeemRewardsJourneyService:PbRedeemRewardsJourneyService) {
    this.title= this.PbRedeemRewardsJourneyService.serviceConfig.headerTitle;
   }

  ngOnInit(): void { }
}
