import { Action as ReduxAction } from 'redux';

import { ActionType } from '@enums';

export interface AppState {
  readonly kakezan: number;
  readonly warizan: number;
  readonly mitorizan: number;
  readonly anzan: number;
}

export interface Action<S> extends ReduxAction {
  readonly type: string;
  readonly payload: Partial<S>;
}

export type AppAction = Action<AppState>;

const initialState: AppState = {
  kakezan: 8,
  warizan: 8,
  mitorizan: 8,
  anzan: 8,
};

export default (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case ActionType.Increment:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
