import * as React from 'react';
import { Theme, Typography } from '@material-ui/core';
import { StyleRules, WithStyles } from '@material-ui/core/styles';

import { createStyled } from '@utils';

interface Props {
  readonly title?: string;
  readonly desc?: string;
}

const ChapterHeader = ({ title = '', desc = '' }: Props) => (
  <Styled>
    {({ classes }: WithStyles<ClassKey>) => (
      <div className={classes.container}>
        <Typography variant="display1" align="center" gutterBottom={true}>
          {title}
        </Typography>
        <Typography align="center" gutterBottom={true}>
          {desc}
        </Typography>
      </div>
    )}
  </Styled>
);

type ClassKey = 'container';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      marginBottom: theme.spacing.unit * 4,
    },
  }),
);

export default ChapterHeader;
