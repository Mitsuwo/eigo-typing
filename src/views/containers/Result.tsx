import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CorrectKey } from '../../store/PageManager/types';
import { BarChart, BarChartData } from '../components/BarChart';
import { TypedScripts } from '../components/TypedScripts';

const ResultContainer: React.FC = () => {
  const { correctKeys, incorrectKeys } = useSelector((state: RootState) => state.pageManager);
  const typedScripts = useSelector((state: RootState) => {
    const { currentScriptIndex, scripts } = state.typingContent;
    return scripts.slice(0, currentScriptIndex + 1);
  });
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
  return (
    <div style={{ height: '100vh', overflow: 'scroll' }}>
      <TypedScripts typedScripts={typedScripts} />
      <BarChart
        data={intervalData}
        barDataKey="タイピングするまでの時間 - 長い順（秒）"
        barColor="#7200da"
        ascending={false}
      />
      <BarChart
        data={intervalData}
        barDataKey="タイピングするまでの時間 - 短い順（秒）"
        barColor="#f9c00c"
        ascending
      />
      <BarChart
        data={incorrectCountData}
        barDataKey="タイプミスした回数（回）"
        barColor="#f9320c"
        ascending={false}
      />
      <BarChart
        data={correctCountData}
        barDataKey="正確にタイピングした回数（回）"
        barColor="#00b9f1"
        ascending={false}
      />
    </div>
  );
};

export const Result = ResultContainer;
