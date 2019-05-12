import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { changeGrade, GradeInfo } from '../actions';
import {
  Chapter,
  ChapterHeader,
  ContainerCard,
  GradeCard,
  Footer,
  Header,
  ImageBackground,
  LargeButton,
} from '../components';
import { AppState } from '../reducers';
import { COLORS, Category } from '../constants';
import { Styles } from '../utils';

interface Title {
  title: string;
  key: Category;
}

const titles: Title[] = [
  {
    title: 'かけざん',
    key: Category.Kakezan,
  },
  {
    title: 'わりざん',
    key: Category.Warizan,
  },
  {
    title: 'みとりざん',
    key: Category.Mitorizan,
  },
  {
    title: 'あんざん',
    key: Category.Anzan,
  },
];

interface StateProps {
  readonly [Category.Kakezan]: number;
  readonly [Category.Warizan]: number;
  readonly [Category.Mitorizan]: number;
  readonly [Category.Anzan]: number;
}

interface DispatchProps {
  readonly actions: {
    readonly changeGrade: (gradeInfo: GradeInfo) => void;
  };
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class App extends React.PureComponent<Props> {
  state = {
    checked: false,
  };

  public render() {
    return (
      <ImageBackground>
        <Header text="そろばん問題メーカー" />
        <Chapter>
          <ChapterHeader
            title="むずかしさをえらぶ"
            desc="かけざん、わりざん、みとりざん、あんざんの問題を作成します。"
          />
          <ContainerCard>
            {titles.map(({ title, key }) => (
              <GradeCard
                key={title}
                title={title}
                grade={this.props[key]}
                needed={true}
                onGradeChange={this.onGradeChange(key)}
                onCheckedChange={this.onCheckedChange}
                checkTrueText="つくる"
                checkFalseText="つくらない"
                cardStyle={styles[key]}
              />
            ))}
          </ContainerCard>
          <LargeButton text="問題を作成する" />
        </Chapter>
        <Footer text="© 2018 そろばん問題メーカー" />
      </ImageBackground>
    );
  }

  private onGradeChange = (category: Category) => (event: any) => {
    const { value: grade } = event.target;
    this.props.actions.changeGrade({ category, grade });
  };

  private onCheckedChange = () => {
    // TODO: redux action here
  };
}

const mapStateToProps = (state: AppState) => ({
  kakezan: state.kakezanGrade,
  warizan: state.warizanGrade,
  mitorizan: state.mitorizanGrade,
  anzan: state.anzanGrade,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    changeGrade: bindActionCreators(changeGrade, dispatch),
  },
});

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(App);

type ClassKey = 'kakezan' | 'warizan' | 'mitorizan' | 'anzan';
const styles: Styles<ClassKey> = {
  kakezan: {
    backgroundColor: COLORS.peach,
  },
  warizan: {
    backgroundColor: COLORS.mint,
  },
  mitorizan: {
    backgroundColor: COLORS.lime,
  },
  anzan: {
    backgroundColor: COLORS.mango,
  },
};
