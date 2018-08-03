import * as React from 'react';
import { IconButton, Paper, Theme, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { Github } from '@components';
import { createStyled } from '@utils';
import { URLS } from '@constants';

interface Props {
  readonly text?: string;
}

export const Footer = ({ text = '' }: Props) => (
  <Styled>
    {({ classes }) => (
      <Paper className={classes.container} elevation={0} square={true}>
        <Typography color="inherit">{text}</Typography>
        <IconButton href={URLS.github} target="_blank" color="inherit">
          <Github />
        </IconButton>
      </Paper>
    )}
  </Styled>
);

type ClassKey = 'container';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      alignItems: 'center',
      backgroundColor: '#B6BEC5',
      color: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing.unit * 3,
    },
  }),
);
