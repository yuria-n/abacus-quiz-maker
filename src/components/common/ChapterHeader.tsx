import * as React from 'react';
import { Theme, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '@utils';

interface Props {
  readonly title?: string;
  readonly desc?: string;
}

export const ChapterHeader = ({ title = '', desc = '' }: Props) => (
  <Styled>
    {({ classes }) => (
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant="display1"
          align="center"
          gutterBottom={true}
        >
          {title}
        </Typography>
        <Typography
          className={classes.desc}
          variant="subheading"
          align="center"
          gutterBottom={true}
        >
          {desc}
        </Typography>
      </div>
    )}
  </Styled>
);

type ClassKey = 'container' | 'desc' | 'title';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      marginBottom: theme.spacing.unit * 3,
    },
    desc: {
      color: theme.palette.text.secondary,
    },
    title: {
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
  }),
);
