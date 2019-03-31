import { ActionType } from '@enums';

export const changeKakezanGrade = (kakezanGrade: number) => {
  console.log('action: ', kakezanGrade);
  return {
    type: ActionType.ChangeKakezanGrade,
    payload: { kakezanGrade },
  };
};
