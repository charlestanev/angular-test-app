import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {

	users = [
		{
			name: 'Ivan1',
			age: 21
		},
		{
			name: 'Ivan2',
			age: 22
		},
		{
			name: 'Ivan3',
			age: 23
		}
	];

	constructor() { }

	addNewUserHandler(newUser: IUser): void {
		this.users.push(newUser);
	}
}
