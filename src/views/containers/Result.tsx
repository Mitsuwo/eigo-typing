import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Chart } from '../components/Chart';

const ResultContainer: React.FC = () => {
  const { intervals } = useSelector((state: RootState) => state.pageManager);
  return (
    <div>
      <div>Result Page</div>
      <Chart data={intervals} />
    </div>
  );
};

export const Result = ResultContainer;
