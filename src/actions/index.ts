import { ActionType } from '@enums';

export const incrementKakezan = (value: number) => {
  return {
    type: ActionType.Increment,
    payload: { kakezan: value + 1 },
  };
};
