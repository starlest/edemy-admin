import { Routes, RouterModule } from '@angular/router';
import {
	DashboardComponent, LoginComponent, NotFoundPageComponent, StudentsComponent
} from './components';
import { LoggedInGuard, NotLoggedInGuard } from './guards';

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoggedInGuard]
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [NotLoggedInGuard]
	},
	{
		path: 'students',
		component: StudentsComponent,
		canActivate: [NotLoggedInGuard]
	},
	{
		path: '404',
		component: NotFoundPageComponent
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}
];

export const AppRoutingProviders: any[] = [];

export const AppRouting = RouterModule.forRoot(appRoutes);
