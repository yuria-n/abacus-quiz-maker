import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '../../utils';

interface Props {
  readonly children?: React.ReactNode;
}

export const Chapter = ({ children }: Props) => (
  <Styled>
    {({ classes }) => <div className={classes.container}>{children}</div>}
  </Styled>
);

type ClassKey = 'container';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: theme.breakpoints.values.md,
      paddingTop: theme.spacing.unit * 11,
      paddingRight: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 6,
      paddingLeft: theme.spacing.unit * 3,
    },
  }),
);
