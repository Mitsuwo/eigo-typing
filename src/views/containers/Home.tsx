import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { setShowJapanese } from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/ShowJapaneseCheckBox';

const HomeContainer: React.FC = () => {
  const { showJapanese } = useSelector((state: RootState) => state.typingContent);
  const dispatch = useDispatch();
  const switchShowJapanese = () => {
    dispatch(setShowJapanese(!showJapanese));
  };
  return (
    <div>
      <div>英語でタイピング</div>
      <div>
        <Link to="/typing">タイピング スタート</Link>
      </div>
      <ShowJapaneseCheckBox showJapanese={showJapanese} switchShowJapanese={switchShowJapanese} />
    </div>
  );
};

export const Home = HomeContainer;
