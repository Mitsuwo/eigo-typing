import React from 'react';
import styled from 'styled-components';
import { Character } from './Character';

type Props = {
  script: string;
  correctCharCount: number;
  scriptIndex: number;
  currentScriptIndex: number;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  const [shouldBreakIndexes, setShouldBreakIndexes] = React.useState<number[]>([]);
  const divRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!props.script || !divRef || !divRef.current || !divRef.current.children) {
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
        const lastSpaceIndex = props.script.substring(0, i).lastIndexOf(' ');
        tmpIndexes.push(lastSpaceIndex);
        i = lastSpaceIndex;
      }
    }
    setShouldBreakIndexes(tmpIndexes);
  }, [props.script]);
  return (
    <div className={props.className} ref={divRef}>
      {props.script.split('').map((char: string, index: number) => {
        const color = props.correctCharCount > index ? 'black' : 'grey';
        const isNextChar = props.correctCharCount === index;
        return (
          <Character
            id={`char_${props.scriptIndex}_${index}`}
            key={index}
            char={char}
            color={color}
            isNextChar={isNextChar}
            shouldBreak={shouldBreakIndexes.indexOf(index) !== -1}
          />
        );
      })}
    </div>
  );
};

export const ScriptEnglish = styled(View)`
  width: calc(100% - 4vw);
  margin: 2vw;
`;
