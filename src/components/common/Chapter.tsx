import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, WithStyles } from '@material-ui/core/styles';

import { createStyled } from '@utils';

interface Props {
  readonly children?: React.ReactNode;
}

const Chapter = ({ children }: Props) => (
  <Styled>
    {({ classes }: WithStyles<ClassKey>) => (
      <div className={classes.container}>{children}</div>
    )}
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
      padding: theme.spacing.unit * 3,
    },
  }),
);

export default Chapter;
