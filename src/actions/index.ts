import { ActionType } from '@enums';

export const changeKakezanGrade = (kakezan: number) => {
  return {
    type: ActionType.ChangeKakezanGrade,
    payload: { kakezan },
  };
};
