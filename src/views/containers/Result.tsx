import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Interval } from '../../store/PageManager/types';
import { Chart } from '../components/Chart';

interface IncorrectKeyCount {
  key: string;
  count: number;
}

const ResultContainer: React.FC = () => {
  const { intervals, incorrectKeys } = useSelector((state: RootState) => state.pageManager);
  const getIntervals = () => {
    let result: Interval[] = [];
    intervals.forEach((interval: Interval) => {
      const sameKeyIndex = result.findIndex(
        (addedInterval: Interval) => addedInterval.key === interval.key
      );
      if (sameKeyIndex === -1) {
        result.push(interval);
      } else {
        result[sameKeyIndex].interval = (result[sameKeyIndex].interval + interval.interval) / 2;
      }
    });
    result = result.sort((a: Interval, b: Interval) => b.interval - a.interval);
    result = result.slice(0, 10);
    return result;
  };
  const getIncorrectKeyCount = (): IncorrectKeyCount[] => {
    let joinedIncorrectkeys = incorrectKeys.join('');
    let result = [];
    for (let i = 0; i < joinedIncorrectkeys.length; i++) {
      const targetKey = joinedIncorrectkeys[0];
      const incorrectKeysWithoutTargetKey = joinedIncorrectkeys.split(targetKey);
      const count = incorrectKeysWithoutTargetKey.length - 1;
      joinedIncorrectkeys = incorrectKeysWithoutTargetKey.join('');
      result.push({ key: targetKey, count });
    }
    result = result.sort((a: IncorrectKeyCount, b: IncorrectKeyCount) => b.count - a.count);
    result = result.slice(0, 10);
    return result;
  };
  return (
    <div>
      <div>Result Page</div>
      <Chart data={getIntervals()} barDataKey="interval" />
      <Chart data={getIncorrectKeyCount()} barDataKey="count" />
    </div>
  );
};

export const Result = ResultContainer;
