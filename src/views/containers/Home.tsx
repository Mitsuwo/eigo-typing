import React from 'react';
import { Link } from 'react-router-dom';

const HomeContainer: React.FC = () => {
  return (
    <div>
      <div>英語でタイピング</div>
      <div>
        <Link to="/typing">タイピング スタート</Link>
      </div>
    </div>
  );
};

export const Home = HomeContainer;
