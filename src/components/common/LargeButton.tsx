import * as React from 'react';
import { Theme, Typography } from '@material-ui/core';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '@utils';

interface Props extends ButtonProps {
  readonly text?: string;
  readonly onClick?: () => void;
}

export const LargeButton = ({
  text = '',
  variant = 'contained',
  size = 'large',
  color = 'primary',
  ...props
}: Props) => (
  <Styled>
    {({ classes }) => (
      <Button
        className={classes.container}
        variant="contained"
        size="large"
        color="primary"
        {...props}
      >
        <Typography variant="button" color="inherit">
          {text}
        </Typography>
      </Button>
    )}
  </Styled>
);

type ClassKey = 'container';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      paddingTop: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 5,
    },
  }),
);
