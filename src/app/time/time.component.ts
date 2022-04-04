import { Component, OnDestroy } from '@angular/core';
import { interval, map, startWith, Subscription } from 'rxjs';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnDestroy {

	timeStreamSubscription!: Subscription;

	time$ = interval(1000).pipe(
		startWith(''),
		map(() => new Date())
	)

	timeValue!: Date;

	constructor() {
		this.timeStreamSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue);
	}

	ngOnDestroy(): void {
		this.timeStreamSubscription.unsubscribe();
	}


}
