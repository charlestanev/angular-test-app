import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
	selector: 'app-user-list-item',
	templateUrl: './user-list-item.component.html',
	styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

	@Input() user: IUser | undefined;
	constructor() { }

	ngOnInit(): void {
	}



}


// class ClaimRuleAsset extends ZenChartsMainAssetBundle
// use zencharts\modules\billing\assets\BillingReportAsset;
// BillingReportAsset::register($this);
