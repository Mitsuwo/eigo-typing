import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';
import { Character } from './Character';

type Props = {
  script: string;
  shouldBreakIndexes: number[];
  divRef: React.RefObject<HTMLDivElement>;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className} ref={props.divRef}>
      {props.script.split('').map((char: string, index: number) => {
        return (
          <Character
            key={index}
            char={char}
            index={index}
            shouldBreak={props.shouldBreakIndexes.indexOf(index) !== -1}
          />
        );
      })}
    </div>
  );
};

const StyledView = styled(View)`
  width: calc(100% - 4vw);
  margin: 2vw;
`;

const Container: React.FC = () => {
  const scriptEnglish = useSelector((state: RootState) => {
    const { currentScript } = state.typingContent;
    return currentScript ? currentScript.english : '';
  });
  const [shouldBreakIndexes, setShouldBreakIndexes] = React.useState<number[]>([]);
  const divRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!scriptEnglish || !divRef || !divRef.current || !divRef.current.children) {
      return;
    }
    const maxWidth = divRef.current.getBoundingClientRect().width;
    let tmpWidth = 0;
    const charArray = Array.from(divRef.current.children);
    const tmpIndexes = [];
    for (let i = 0; i < charArray.length; i++) {
      const { width } = charArray[i].getBoundingClientRect();
      tmpWidth += width;
      if (tmpWidth > maxWidth) {
        tmpWidth = 0;
        const lastSpaceIndex = scriptEnglish.substring(0, i).lastIndexOf(' ');
        tmpIndexes.push(lastSpaceIndex);
        i = lastSpaceIndex;
      }
    }
    setShouldBreakIndexes(tmpIndexes);
  }, [scriptEnglish]);
  return React.useMemo(
    () => (
      <StyledView script={scriptEnglish} shouldBreakIndexes={shouldBreakIndexes} divRef={divRef} />
    ),
    [scriptEnglish, shouldBreakIndexes]
  );
};

export const ScriptEnglish = React.memo(Container);
