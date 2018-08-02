import * as React from 'react';

interface Props {
  readonly value: number;
}

export default class Text extends React.PureComponent<Props> {
  public render() {
    return <p>{this.props.value}</p>;
  }
}
