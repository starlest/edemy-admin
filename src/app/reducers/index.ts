import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromRouter from '@ngrx/router-store';


export interface State {
	auth: fromAuth.State;
	router: fromRouter.RouterState;
}

const reducers = {
	auth: fromAuth.reducer,
	router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze,
  combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	if (environment.production)
		return productionReducer(state, action);
	return developmentReducer(state, action);
}

/**
 * Auth Reducers
 */
export const getAuthState = (state: State) => state.auth;
export const getAuthEntity = createSelector(getAuthState, fromAuth.getEntity);
export const getAuthLoaded = createSelector(getAuthState, fromAuth.getLoaded);
export const getAuthLoading = createSelector(getAuthState, fromAuth.getLoading);
