import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as auth from '../../actions/auth.actions';
import * as fromRoot from '../../reducers';

@Component({
	selector: 'ed-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss']
})
export class LoginComponent {
	loginForm: FormGroup;
	submitted$: Observable<boolean>;
	loginError$: Observable<boolean>;

	constructor(private store: Store<fromRoot.State>,
	            private fb: FormBuilder) {
		this.submitted$ = this.store.select(fromRoot.getAuthLoading);

		this.loginError$ =
		  this.store.select(fromRoot.getAuthState)
			.map(state => !state.entity && state.loaded);

		this.loginForm = fb.group({
			Username: ['', Validators.required],
			Password: ['', Validators.required],
			RememberUser: [false]
		});
	}

	login() {
		const username = this.loginForm.value.Username;
		const password = this.loginForm.value.Password;
		const rememberUser = this.loginForm.value.RememberUser;
		this.store.dispatch(
		  new auth.LoadFromServerAction({
			  username: username, password: password, rememberUser: rememberUser
		  }));
	}
}
