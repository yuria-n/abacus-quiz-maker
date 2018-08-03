import * as React from 'react';
import {
  Checkbox,
  MenuItem,
  TextField,
  Theme,
  Typography,
  FormGroup,
} from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

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
  readonly cardStyle?: React.CSSProperties;
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

export const GradeCard = ({
  title,
  grade,
  needed,
  onGradeChange,
  onCheckedChange,
  checkTrueText,
  checkFalseText,
  cardStyle = {},
}: Props) => (
  <Styled>
    {({ classes }) => (
      <ColorCard style={cardStyle}>
        <Typography
          variant="title"
          align="center"
          color="inherit"
          gutterBottom={true}
        >
          {title}
        </Typography>
        <TextField
          id="grade"
          select={true}
          className={classes.textField}
          value={grade}
          onChange={onGradeChange}
          margin="normal"
          fullWidth={true}
        >
          {grades.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormGroup className={classes.checkbox}>
          <Checkbox
            className={classes.checkbox}
            checked={needed}
            onChange={onCheckedChange}
            value="checkedA"
          />
          <Typography color="inherit">
            {needed ? checkTrueText : checkFalseText}
          </Typography>
        </FormGroup>
      </ColorCard>
    )}
  </Styled>
);

type ClassKey = 'checkbox' | 'textField';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    checkbox: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      marginLeft: -theme.spacing.unit * 1.5,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  }),
);
