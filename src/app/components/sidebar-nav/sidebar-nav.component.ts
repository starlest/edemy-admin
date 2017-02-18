import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as auth from '../../actions/auth.actions';

@Component({
	selector: 'ed-sidebar-nav',
	templateUrl: './sidebar-nav.component.html',
	styleUrls: ['sidebar-nav.component.scss']
})
export class SidebarNavComponent {

	constructor(private store: Store<fromRoot.State>) {
	}

	logout() {
		this.store.dispatch(new auth.RemoveAction);
	}
}
