import * as React from 'react';
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { StyleRules, WithStyles } from '@material-ui/core/styles';

import { ColorCard } from '@components';
import { createStyled } from '@utils';

interface Props {
  readonly title: string;
  readonly grade: number;
  readonly needed: boolean;
  readonly onGradeChange: () => void;
  readonly onCheckedChange: () => void;
  readonly checkTrueText: string;
  readonly checkFalseText: string;
}

// TODO: move
const grades = [
  {
    value: 8,
    label: '8級',
  },
  {
    value: 7,
    label: '7級',
  },
  {
    value: 6,
    label: '6級',
  },
];

const GradeCard = ({
  title,
  grade,
  needed,
  onGradeChange,
  onCheckedChange,
  checkTrueText,
  checkFalseText,
}: Props) => (
  <Styled>
    {({ classes }: WithStyles<ClassKey>) => (
      <ColorCard>
        <Typography variant="title" align="center" gutterBottom={true}>
          {title}
        </Typography>
        <TextField
          id="select-currency-native"
          select={true}
          className={classes.textField}
          value={grade}
          onChange={onGradeChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {grades.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          className={classes.checkbox}
          control={
            <Checkbox
              checked={needed}
              onChange={onCheckedChange}
              value="checkedA"
            />
          }
          label={needed ? checkTrueText : checkFalseText}
        />
      </ColorCard>
    )}
  </Styled>
);

type ClassKey = 'checkbox' | 'textField' | 'menu';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    checkbox: {
      marginLeft: -theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
    },
    menu: {
      width: '100%',
    },
  }),
);

export default GradeCard;
