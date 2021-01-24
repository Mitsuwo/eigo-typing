import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CorrectKey } from '../../store/PageManager/types';
import { Chart } from '../components/Chart';

interface TypedKey {
  keyText: string;
  typedCount: number;
}

interface IncorrectKey {
  keyText: string;
  incorrectCount: number;
}

const ResultContainer: React.FC = () => {
  const { correctKeys, incorrectKeys } = useSelector((state: RootState) => state.pageManager);
  const generateIntervalData = () => {
    let result: CorrectKey[] = [];
    correctKeys.forEach((correctKey: CorrectKey) => {
      const sameKeyIndex = result.findIndex(
        (addedCorrectKey: CorrectKey) => addedCorrectKey.keyText === correctKey.keyText
      );
      if (sameKeyIndex === -1) {
        result.push(correctKey);
      } else {
        result[sameKeyIndex].interval = (result[sameKeyIndex].interval + correctKey.interval) / 2;
      }
    });
    result = result.sort((a: CorrectKey, b: CorrectKey) => b.interval - a.interval);
    return result;
  };
  const generateIncorrectCountData = (): IncorrectKey[] => {
    let joinedIncorrectkeys = incorrectKeys.join('');
    let result = [];
    for (let i = 0; i < joinedIncorrectkeys.length; i++) {
      const targetKey = joinedIncorrectkeys[0];
      const incorrectKeysWithoutTargetKey = joinedIncorrectkeys.split(targetKey);
      const incorrectCount = incorrectKeysWithoutTargetKey.length - 1;
      joinedIncorrectkeys = incorrectKeysWithoutTargetKey.join('');
      result.push({ keyText: targetKey, incorrectCount });
    }
    result = result.sort((a: IncorrectKey, b: IncorrectKey) => b.incorrectCount - a.incorrectCount);
    return result;
  };
  const generateCorrectCountData = (): TypedKey[] => {
    let joinedCorrectKeys = correctKeys.join('');
    let result = [];
    for (let i = 0; i < joinedCorrectKeys.length; i++) {
      const targetKey = joinedCorrectKeys[0];
      const incorrectKeysWithoutTargetKey = joinedCorrectKeys.split(targetKey);
      const typedCount = incorrectKeysWithoutTargetKey.length - 1;
      joinedCorrectKeys = incorrectKeysWithoutTargetKey.join('');
      result.push({ keyText: targetKey, typedCount });
    }
    result = result.sort((a: TypedKey, b: TypedKey) => b.typedCount - a.typedCount);
    return result;
  };
  return (
    <div>
      <Chart data={generateIntervalData()} barDataKey="interval" barColor="#f9c00c" />
      <Chart data={generateIncorrectCountData()} barDataKey="incorrectCount" barColor="#f9320c" />
      <Chart data={generateCorrectCountData()} barDataKey="typedCount" barColor="#00b9f1" />
      {/* <Chart data={generateCorrectTypeRateData()} barDataKey="CorrectTypeRate" barColor="#7200da" /> */}
    </div>
  );
};

export const Result = ResultContainer;
