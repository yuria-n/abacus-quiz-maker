import * as React from 'react';
import { AppBar, Toolbar, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '@utils';
import { Logo } from '@components';

interface Props {
  readonly text?: string;
}

const Header = ({ text = '' }: Props) => (
  <Styled>
    {({ classes }) => (
      <AppBar className={classes.container} position="static" color="default">
        <Toolbar>
          <Logo text={text} />
        </Toolbar>
      </AppBar>
    )}
  </Styled>
);

type ClassKey = 'container';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      backgroundColor: theme.palette.common.white,
    },
  }),
);

export default Header;
