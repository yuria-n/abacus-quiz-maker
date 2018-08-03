import * as React from 'react';

import { createStyled } from '@utils';
import { IMAGES } from '@constants';

interface Props {
  readonly children?: React.ReactNode;
}

const Chapter = ({ children }: Props) => (
  <Styled>
    {({ classes }) => <div className={classes.container}>{children}</div>}
  </Styled>
);

const Styled = createStyled({
  container: {
    backgroundImage: `url(${IMAGES.pattern})`,
  },
});

export default Chapter;
