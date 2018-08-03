import * as React from 'react';
import { Card, CardContent, Grid, Theme } from '@material-ui/core';
import { StyleRules, WithStyles } from '@material-ui/core/styles';

import { createStyled } from '@utils';

interface Props {
  readonly children?: React.ReactNode;
}

const ColorCard = ({ children = null }: Props) => (
  <Styled>
    {({ classes }: WithStyles<ClassKey>) => (
      <Grid item={true} md={3} sm={6} xs={12}>
        <Card>
          <CardContent className={classes.content}>{children}</CardContent>
        </Card>
      </Grid>
    )}
  </Styled>
);

type ClassKey = 'content';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    content: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: theme.spacing.unit * 3,
    },
  }),
);

export default ColorCard;
