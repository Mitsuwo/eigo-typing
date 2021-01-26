import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CorrectKey } from '../../store/PageManager/types';
import { BarChart, BarChartData } from '../components/BarChart';

const ResultContainer: React.FC = () => {
  const { correctKeys, incorrectKeys } = useSelector((state: RootState) => state.pageManager);
  const createBarChartData = (keyText: string, volume: number): BarChartData => {
    if (keyText === ' ') {
      keyText = 'space';
    }
    return { keyText, volume };
  };
  const intervalData = React.useMemo<BarChartData[]>(() => {
    const result: BarChartData[] = [];
    correctKeys.forEach((correctKey: CorrectKey) => {
      const sameKeyIndex = result.findIndex(
        (addedCorrectKey: BarChartData) => addedCorrectKey.keyText === correctKey.keyText
      );
      if (sameKeyIndex === -1) {
        const barChartData = createBarChartData(correctKey.keyText, correctKey.interval);
        result.push(barChartData);
      } else {
        result[sameKeyIndex].volume = (result[sameKeyIndex].volume + correctKey.interval) / 2;
      }
    });
    return result;
  }, [correctKeys]);
  const incorrectCountData = React.useMemo<BarChartData[]>(() => {
    let joinedIncorrectkeys = incorrectKeys.join('');
    const result: BarChartData[] = [];
    for (let i = 0; i < joinedIncorrectkeys.length; i++) {
      const targetKey = joinedIncorrectkeys[0];
      const incorrectKeysWithoutTargetKey = joinedIncorrectkeys.split(targetKey);
      const incorrectCount = incorrectKeysWithoutTargetKey.length - 1;
      joinedIncorrectkeys = incorrectKeysWithoutTargetKey.join('');
      const barChartData = createBarChartData(targetKey, incorrectCount);
      result.push(barChartData);
    }
    return result;
  }, [incorrectKeys]);
  const correctCountData = React.useMemo<BarChartData[]>(() => {
    let joinedCorrectKeys = correctKeys
      .map((correctKey: CorrectKey) => correctKey.keyText)
      .join('');
    const result: BarChartData[] = [];
    for (let i = 0; i < joinedCorrectKeys.length; i++) {
      const targetKey = joinedCorrectKeys[0];
      const incorrectKeysWithoutTargetKey = joinedCorrectKeys.split(targetKey);
      const typedCount = incorrectKeysWithoutTargetKey.length - 1;
      joinedCorrectKeys = incorrectKeysWithoutTargetKey.join('');
      const barChartData = createBarChartData(targetKey, typedCount);
      result.push(barChartData);
    }
    return result;
  }, [correctKeys]);
  const incorrectTypeRateData = React.useMemo<BarChartData[]>(() => {
    const result: BarChartData[] = [];
    correctCountData.forEach((correctKey: BarChartData) => {
      const incorrectKey = incorrectCountData.find(
        (incorrectKey: BarChartData) => incorrectKey.keyText === correctKey.keyText
      );
      if (incorrectKey && incorrectKey.volume) {
        const incorrectTypeRate = (incorrectKey.volume / correctKey.volume) * 100;
        const barChartData = createBarChartData(incorrectKey.keyText, incorrectTypeRate);
        result.push(barChartData);
      }
    });
    return result;
  }, [correctKeys, incorrectKeys]);
  return (
    <div>
      <BarChart data={intervalData} barDataKey="interval" barColor="#f9c00c" />
      <BarChart data={incorrectCountData} barDataKey="incorrectCount" barColor="#f9320c" />
      <BarChart data={correctCountData} barDataKey="typedCount" barColor="#00b9f1" />
      <BarChart data={incorrectTypeRateData} barDataKey="incorrectTypeRate" barColor="#7200da" />
    </div>
  );
};

export const Result = ResultContainer;
