import { Action as ReduxAction } from 'redux';

import { ActionType } from '../enums';

export interface AppState {
  readonly kakezanGrade: number;
  readonly warizanGrade: number;
  readonly mitorizanGrade: number;
  readonly anzanGrade: number;
}

export interface Action<S> extends ReduxAction {
  readonly type: string;
  readonly payload: Partial<S>;
}

export type AppAction = Action<AppState>;

const initialState: AppState = {
  kakezanGrade: 8,
  warizanGrade: 8,
  mitorizanGrade: 8,
  anzanGrade: 8,
};

export default (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case ActionType.ChangeKakezanGrade:
    case ActionType.ChangeWarizanGrade:
    case ActionType.ChangeAnzanGrade:
    case ActionType.ChangeMitorizanGrade:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
