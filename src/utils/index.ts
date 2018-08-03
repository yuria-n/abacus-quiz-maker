import withStyles, {
  StyleRules,
  StyleRulesCallback,
  WithStyles,
  WithStylesOptions,
} from '@material-ui/core/styles/withStyles';

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
