import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Interval } from '../../store/PageManager/types';
import { Chart } from '../components/Chart';

const ResultContainer: React.FC = () => {
  const { intervals } = useSelector((state: RootState) => state.pageManager);
  React.useEffect(() => {
    const data: Interval[] = [];
    intervals.forEach((interval: Interval) => {
      const sameKeyIndex = data.findIndex(
        (addedInterval: Interval) => addedInterval.key === interval.key
      );
      if (sameKeyIndex === -1) {
        data.push(interval);
      } else {
        data[sameKeyIndex].interval = (data[sameKeyIndex].interval + interval.interval) / 2;
      }
    });
    setDataState(data);
  }, []);
  const [dataState, setDataState] = React.useState<Interval[]>([]);
  return (
    <div>
      <div>Result Page</div>
      <Chart data={dataState} />
    </div>
  );
};

export const Result = ResultContainer;
