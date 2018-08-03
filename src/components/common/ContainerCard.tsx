import * as React from 'react';
import { Grid } from '@material-ui/core';

interface Props {
  readonly children?: React.ReactNode;
}

const ContainerCard = ({ children = null }: Props) => (
  <Grid container={true} spacing={24}>
    {children}
  </Grid>
);

export default ContainerCard;
