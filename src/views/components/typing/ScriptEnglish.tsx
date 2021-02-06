import React from 'react';
import { Character } from './Character';

interface Props {
  script: string;
  correctCharCount: number;
  scriptIndex: number;
  currentScriptIndex: number;
}

const ScriptEnglishComponent: React.FC<Props> = (props: Props) => {
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
    <div ref={divRef} style={{ width: '100%', margin: '2vw' }}>
      {props.script.split('').map((char: string, index: number) => {
        const color = props.correctCharCount > index ? 'black' : 'grey';
        const isNextChar = props.correctCharCount === index;
        return (
          <>
            <Character
              id={`char_${props.scriptIndex}_${index}`}
              key={index}
              char={char}
              color={color}
              isNextChar={isNextChar}
            />
            {shouldBreakIndexes.indexOf(index) !== -1 ? <br /> : ''}
          </>
        );
      })}
    </div>
  );
};

export const ScriptEnglish = React.memo<Props>(ScriptEnglishComponent);
