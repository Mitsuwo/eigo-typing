import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setContentType } from '../../store/TypingContent.tsx/action';

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const setContentTypeWord = () => {
    dispatch(setContentType('word'));
  };
  const setContentTypeStory = () => {
    dispatch(setContentType('story'));
  };
  return (
    <div>
      <div>英語でタイピング</div>
      <div>
        <Link to="/typing" onClick={setContentTypeWord}>
          タイピング スタート (単語)
        </Link>
      </div>
      <div>
        <Link to="/typing" onClick={setContentTypeStory}>
          タイピング スタート (会話)
        </Link>
      </div>
    </div>
  );
};

export const Home = HomeContainer;
