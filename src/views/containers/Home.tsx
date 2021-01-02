import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage } from '../../store/PageManager/actions';

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const handleClickLink = () => {
    dispatch(setCurrentPage('typing'));
  };
  return (
    <div>
      <div>英語でタイピング</div>
      <Link to="/typing" onClick={handleClickLink}>
        タイピング スタート
      </Link>
    </div>
  );
};

export const Home = HomeContainer;
