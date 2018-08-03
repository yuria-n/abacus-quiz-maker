import * as React from 'react';
import { CardContent, Grid, Theme } from '@material-ui/core';
import Card, { CardProps } from '@material-ui/core/Card';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '@utils';

interface Props extends CardProps {
  readonly children?: React.ReactNode;
}

export const ColorCard = ({ children = null, style = {} }: Props) => (
  <Styled>
    {({ classes }) => (
      <Grid item={true} md={3} sm={6} xs={12}>
        <Card style={{ ...style }}>
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
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: theme.spacing.unit * 3,
    },
  }),
);
