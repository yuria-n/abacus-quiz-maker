import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementKakezan } from '@actions';
import { ContainerCard } from '@components';
import { AppState } from '@reducers';
import { Dispatch } from '@store';

interface Props {
  readonly kakezan: number;
  readonly warizan: number;
  readonly mitorizan: number;
  readonly anzan: number;
  readonly actions: {
    incrementKakezan: (value: number) => void;
  };
}

class App extends React.PureComponent<Props> {
  public render() {
    const { kakezan, warizan, mitorizan, anzan } = this.props;
    return (
      <ContainerCard
        kakezan={kakezan}
        warizan={warizan}
        mitorizan={mitorizan}
        anzan={anzan}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    const { actions, kakezan } = this.props;
    actions.incrementKakezan(kakezan);
  };
}

const mapStateToProps = (state: AppState): Partial<Props> => ({
  kakezan: state.kakezan,
  warizan: state.warizan,
  mitorizan: state.mitorizan,
  anzan: state.anzan,
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<Props> => ({
  actions: {
    incrementKakezan: bindActionCreators(incrementKakezan, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
