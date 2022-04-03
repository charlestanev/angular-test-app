import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';

@NgModule({
	declarations: [
		AppComponent,
		UserListComponent,
		UserListItemComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		{
			provide: UserService,
			// useClass: UserService
			useValue: {
				users: [
					{
						name: 'Gosho',
						age: 20
					}
				],
				addNewUserHandler() {
					alert('NE!')
				}
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
