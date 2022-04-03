import { Component } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public userService: UserService) {

	}

	// buttonClickHandler(): void {
	// 	const current = this.title++;
	// 	this.users.push(
	// 		{
	// 			name: `Ivan ${this.title}`,
	// 			age: 20 + current
	// 		}
	// 	)
	// }


	// classes = ['test', 'test-1'];

	// showText = true;

	// constructor() {
	// 	debugger;
	// }

	// changeTitleHandler(newTitle: string): void {
	// 	this.title = newTitle;
	// }

	// toggleText(event: MouseEvent, ...args: number[]): void {
	// 	this.classes.push('test-' + Number(this.title)++);
	// 	event.preventDefault();
	// 	this.showText = !this.showText;
	// 	console.log(args);
	// }
	// title = '1';

	// users = [
	// 	{
	// 		name: 'Ivan1',
	// 		age: 21
	// 	},
	// 	{
	// 		name: 'Ivan2',
	// 		age: 22
	// 	},
	// 	{
	// 		name: 'Ivan3',
	// 		age: 23
	// 	}
	// ]

	// buttonClickHandler(): void {
	// 	const current = this.title++;
	// 	this.users.push(
	// 		{
	// 			name: `Ivan ${this.title}`,
	// 			age: 20 + current
	// 		}
	// 	)
	// }
}
