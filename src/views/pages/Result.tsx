import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CorrectKey } from '../../store/Result/types';
import { HomeButton } from '../components/common/HomeButton';
import { BarChart, BarChartData } from '../components/result/BarChart';
import { ResultCard } from '../components/result/ResultCard';
import { TypedScripts } from '../components/result/TypedScripts';

const ResultContainer: React.FC = () => {
  const { correctKeys, incorrectKeys } = useSelector((state: RootState) => state.resultState);
  const typedScripts = useSelector((state: RootState) => {
    const { currentScriptIndex, scripts } = state.typingContent;
    return scripts.slice(0, currentScriptIndex + 1);
  });
  const createBarChartData = (keyText: string, volume: number): BarChartData => {
    return { keyText, volume };
  };
  const intervalData = React.useMemo<BarChartData[]>(() => {
    const result: BarChartData[] = [];
    correctKeys.forEach((correctKey: CorrectKey) => {
      if (correctKey.keyText === ' ') {
        correctKey.keyText = 'space';
      }
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
    <div style={{ height: '100vh' }}>
      <HomeButton />
      <div
        style={{
          width: '100vw',
          position: 'fixed',
          top: '3vh',
          textAlign: 'center',
          fontSize: '4vh',
          fontFamily: 'oxygenMono',
          color: '#808080'
        }}>
        RESULT
      </div>
      <div style={{ overflow: 'scroll', height: '90vh', marginTop: '10vh' }}>
        <ResultCard>
          <div>
            <div
              style={{
                fontSize: '3vh',
                fontFamily: 'koruri',
                color: '#808080',
                margin: '1vh 2vw'
              }}>
              <span style={{ color: '#00b9f1', fontWeight: 'bold' }}>{correctKeys.length}</span>
              文字を正確にタイピングしました
            </div>
            <div
              style={{
                fontSize: '3vh',
                fontFamily: 'koruri',
                color: '#808080',
                margin: '1vh 2vw'
              }}>
              <span style={{ color: '#f9320c', fontWeight: 'bold' }}>{incorrectKeys.length}</span>
              回のタイプミスがありました
            </div>
          </div>
        </ResultCard>
        <ResultCard>
          <TypedScripts typedScripts={typedScripts} />
        </ResultCard>
        <ResultCard>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', overflowX: 'scroll' }}>
            <BarChart
              data={intervalData}
              barName="タイピングするまでの時間 - 長い順（秒）"
              barColor="#7200da"
              ascending={false}
            />
            <BarChart
              data={intervalData}
              barName="タイピングするまでの時間 - 短い順（秒）"
              barColor="#f9c00c"
              ascending
            />
            <BarChart
              data={incorrectCountData}
              barName="タイプミスした回数（回）"
              barColor="#f9320c"
              ascending={false}
            />
            <BarChart
              data={correctCountData}
              barName="正確にタイピングした回数（回）"
              barColor="#00b9f1"
              ascending={false}
            />
          </div>
        </ResultCard>
      </div>
    </div>
  );
};

export const Result = ResultContainer;
