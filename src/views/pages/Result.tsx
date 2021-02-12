import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { CorrectKey } from '../../store/Result/types';
import { Script } from '../../store/TypingContent/types';
import { HomeButton } from '../components/common/HomeButton';
import { BarChart, BarChartData } from '../components/result/BarChart';
import { ResultCard } from '../components/result/ResultCard';
import { TypedScripts } from '../components/result/TypedScripts';

type Props = {
  correctKeyLength: number;
  incorrectKeyLength: number;
  typedScripts: Script[];
  intervalData: BarChartData[];
  incorrectCountData: BarChartData[];
  correctCountData: BarChartData[];
  className?: string;
};

// TODO: タイピング数部分をコンポーネント化

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <HomeButton />
      <div className="page-title">RESULT</div>
      <div className="scrollable">
        <ResultCard>
          <div>
            <div
              style={{
                fontSize: '3vh',
                fontFamily: 'koruri',
                color: '#808080',
                margin: '1vh 2vw'
              }}>
              <span style={{ color: '#00b9f1', fontWeight: 'bold' }}>{props.correctKeyLength}</span>
              文字を正確にタイピングしました
            </div>
            <div
              style={{
                fontSize: '3vh',
                fontFamily: 'koruri',
                color: '#808080',
                margin: '1vh 2vw'
              }}>
              <span style={{ color: '#f9320c', fontWeight: 'bold' }}>
                {props.incorrectKeyLength}
              </span>
              回のタイプミスがありました
            </div>
          </div>
        </ResultCard>
        <ResultCard>
          <>
            <TypedScripts typedScripts={props.typedScripts} />
            <div style={{ textAlign: 'end', color: '#808080' }}>
              Translation by{' '}
              <a href="http://www.edrdg.org/wiki/index.php/Tanaka_Corpus">Yasuhito Tanaka</a>
            </div>
          </>
        </ResultCard>
        <ResultCard>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', overflow: 'hidden' }}>
            <BarChart
              data={props.intervalData}
              barName="タイピングするまでの時間 - 長い順（秒）"
              barColor="#7200da"
              ascending={false}
            />
            <BarChart
              data={props.intervalData}
              barName="タイピングするまでの時間 - 短い順（秒）"
              barColor="#f9c00c"
              ascending
            />
            <BarChart
              data={props.incorrectCountData}
              barName="タイプミスした回数（回）"
              barColor="#f9320c"
              ascending={false}
            />
            <BarChart
              data={props.correctCountData}
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

const StyledView = styled(View)`
  height: 100vh;
  > .page-title {
    width: 100vw;
    position: fixed;
    top: 3vh;
    text-align: center;
    font-size: 4vh;
    font-family: oxygenMono;
    color: #808080;
  }
  > .scrollable {
    margin-top: 3vh;
    overflow: scroll;
    height: 90vh;
  }
`;

export const Result: React.FC<Props> = () => {
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
    <StyledView
      correctKeyLength={correctKeys.length}
      incorrectKeyLength={incorrectKeys.length}
      intervalData={intervalData}
      typedScripts={typedScripts}
      incorrectCountData={incorrectCountData}
      correctCountData={correctCountData}
    />
  );
};
