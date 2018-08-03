import { createMuiTheme, Theme } from '@material-ui/core';
import withStyles, {
  StyleRules,
  StyleRulesCallback,
  WithStyles,
  WithStylesOptions,
} from '@material-ui/core/styles/withStyles';

import { COLORS } from '@constants';

export type Styles<S extends string = string> = Record<S, React.CSSProperties>;

export const theme: Theme = createMuiTheme({
  palette: {
    primary: { main: COLORS.primary },
    text: {
      primary: COLORS.black,
      secondary: COLORS.gray,
      disabled: COLORS.ash,
      hint: COLORS.gray,
    },
  },
});

export const createStyled = <ClassKey extends string>(
  styles: StyleRules<ClassKey> | StyleRulesCallback<ClassKey>,
  options?: WithStylesOptions<ClassKey>,
) =>
  withStyles<ClassKey>(styles, options)(
    ({
      children,
      ...props
    }: WithStyles<ClassKey> & {
      children: (props: WithStyles<ClassKey>) => JSX.Element;
    }) => children(props),
  );
