import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeKakezanGrade } from '@actions';
import {
  Chapter,
  ChapterHeader,
  ContainerCard,
  GradeCard,
  Footer,
  Header,
  LargeButton,
} from '@components';
import { AppState } from '@reducers';
import { Dispatch } from '@store';

interface Props {
  readonly kakezan: number;
  readonly warizan: number;
  readonly mitorizan: number;
  readonly anzan: number;
  readonly actions: {
    readonly changeKakezanGrade: (kakezan: number) => void;
  };
}

// TODO: move
const titles = ['かけざん', 'わりざん', 'みとりざん', 'あんざん'];

class App extends React.PureComponent<Props> {
  public render() {
    return (
      <div>
        <Header text="そろばん問題メーカー" />
        <Chapter>
          <ChapterHeader
            title="むずかしさをえらぶ"
            desc="かけざん、わりざん、みとりざん、あんざんの問題を作成します。"
          />
          <ContainerCard>
            {titles.map(title => (
              <GradeCard
                key={title}
                title={title}
                grade={this.props.kakezan}
                needed={true}
                onGradeChange={this.onKakezanGradeChange}
                onCheckedChange={this.onCheckedChange}
                checkTrueText="つくる"
                checkFalseText="つくらない"
              />
            ))}
          </ContainerCard>
          <LargeButton text="PDFをダウンロード" />
        </Chapter>
        <Footer text="© 2018 そろばん問題メーカー" />
      </div>
    );
  }

  private onKakezanGradeChange = () => (event: any) => {
    // TODO: redux action here
    this.props.actions.changeKakezanGrade(event.target.value);
  };

  private onCheckedChange = () => {
    // TODO: redux action here
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
    changeKakezanGrade: bindActionCreators(changeKakezanGrade, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
