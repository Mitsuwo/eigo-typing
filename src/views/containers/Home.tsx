import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { RootState } from '../../store';
import { resetPageManager, setAppState } from '../../store/PageManager/actions';
import { APP_STATE_TYPING } from '../../store/PageManager/types';
import { setShowJapanese } from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/ShowJapaneseCheckBox';

const HomeContainer: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { showJapanese } = useSelector((state: RootState) => state.typingContent);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetPageManager());
  }, []);
  const switchShowJapanese = () => {
    dispatch(setShowJapanese(!showJapanese));
  };
  const linkToTyping = () => {
    dispatch(setAppState(APP_STATE_TYPING));
    props.history.push('/typing');
  };
  return (
    <div>
      <div>英語でタイピング</div>
      <button onClick={linkToTyping}>タイピング スタート</button>
      <ShowJapaneseCheckBox showJapanese={showJapanese} switchShowJapanese={switchShowJapanese} />
    </div>
  );
};

export const Home = withRouter(HomeContainer);
