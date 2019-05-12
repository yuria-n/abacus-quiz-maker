import { ActionType } from '../enums';
import { Category } from '../constants/index';

export interface GradeInfo {
  category: Category;
  grade: number;
}

export const changeGrade = (gradeInfo: GradeInfo) => {
  const { category, grade } = gradeInfo;

  switch (category) {
    case Category.Kakezan:
      return changeKakezanGrade(grade);
    case Category.Warizan:
      return changeWarizanGrade(grade);
    case Category.Mitorizan:
      return changeMitorizanGrade(grade);
    case Category.Anzan:
      return changeAnzanGrade(grade);
  }
};

export const changeKakezanGrade = (kakezanGrade: number) => {
  return {
    type: ActionType.ChangeKakezanGrade,
    payload: { kakezanGrade },
  };
};

export const changeWarizanGrade = (warizanGrade: number) => {
  return {
    type: ActionType.ChangeKakezanGrade,
    payload: { warizanGrade },
  };
};

export const changeMitorizanGrade = (mitorizanGrade: number) => {
  return {
    type: ActionType.ChangeMitorizanGrade,
    payload: { mitorizanGrade },
  };
};

export const changeAnzanGrade = (anzanGrade: number) => {
  return {
    type: ActionType.ChangeAnzanGrade,
    payload: { anzanGrade },
  };
};
