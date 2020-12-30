import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <div>This is home.</div>
      <Link to="/typing">スタート</Link>
    </div>
  );
};

export const HomeContainer = Home;
