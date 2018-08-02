import {
  createStore,
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
} from 'redux';

import AppReducer, { AppAction, AppState } from '@reducers';

export type Store = ReduxStore<AppState>;
export type Dispatch = ReduxDispatch<AppAction>;

export default createStore(AppReducer);
