import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { AuthHttp } from './auth.http';
import { AuthService } from './services';

import { AppComponent } from './app.component';
import {
	DashboardComponent, LoginComponent, NotFoundPageComponent,
	SidebarNavComponent, StudentsComponent
} from './components';

import {
	AlertModule, CollapseModule, ModalModule, DropdownModule, PaginationModule,
	TabsModule
} from 'ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table';
import { SelectModule } from 'ng2-select';


import { reducer } from './reducers/';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoggedInGuard, NotLoggedInGuard } from './guards';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		LoginComponent,
		NotFoundPageComponent,
		SidebarNavComponent,
		StudentsComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,

		/**
		 * ng2-bootstrap
		 */
		AlertModule.forRoot(),
		CollapseModule.forRoot(),
		ModalModule.forRoot(),
		Ng2TableModule,
		DropdownModule.forRoot(),
		SelectModule,
		PaginationModule.forRoot(),
		TabsModule.forRoot(),

		/**
		 * ngrx/store
		 */
		StoreModule.provideStore(reducer),
		RouterStoreModule.connectRouter(),
		EffectsModule.run(AuthEffects),
		StoreDevtoolsModule.instrumentOnlyWithExtension()
	],
	providers: [AuthHttp, AuthService, LoggedInGuard, NotLoggedInGuard],
	bootstrap: [AppComponent]
})
export class AppModule {
}
