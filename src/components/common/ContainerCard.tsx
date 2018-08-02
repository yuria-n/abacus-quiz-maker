import * as React from 'react';

import { Text } from '@components';

interface Props {
  readonly kakezan: number;
  readonly warizan: number;
  readonly mitorizan: number;
  readonly anzan: number;
  readonly onClick: () => void;
}

export default class ContainerCard extends React.PureComponent<Props> {
  public render() {
    const { kakezan, warizan, mitorizan, anzan, onClick } = this.props;
    // console.log('ｷﾀ ━━━ヽ(´ω`)ﾉ ━━━!!', arr2);
    return (
      <div>
        <button onClick={onClick} />
        <Text key="kakezan" value={kakezan} />
        <Text key="warizan" value={warizan} />
        <Text key="mitorizan" value={mitorizan} />
        <Text key="anzan" value={anzan} />
      </div>
    );
  }
}
