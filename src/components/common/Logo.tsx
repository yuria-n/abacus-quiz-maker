import * as React from 'react';
import { Theme, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '@utils';
import { Abacus } from '@components';

interface Props {
  readonly text?: string;
}

const Logo = ({ text = '' }: Props) => (
  <Styled>
    {({ classes }) => (
      <div className={classes.container}>
        <Abacus className={classes.icon} color="primary" />
        <Typography variant="title" color="inherit">
          {text}
        </Typography>
      </div>
    )}
  </Styled>
);

type ClassKey = 'container' | 'icon';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      marginRight: theme.spacing.unit * 0.5,
      width: theme.spacing.unit * 4,
    },
  }),
);

export default Logo;
