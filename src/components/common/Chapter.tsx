import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '@utils';

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
      marginTop: theme.spacing.unit * 11,
      marginRight: 'auto',
      marginBottom: theme.spacing.unit * 6,
      marginLeft: 'auto',
      maxWidth: theme.breakpoints.values.md,
    },
  }),
);
