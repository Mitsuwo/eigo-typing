import React from 'react';
import { Character } from '../components/Character';

interface Props {
  script: string;
  correctCharCount: number;
  scriptIndex: number;
  currentScriptIndex: number;
}

const ScriptComponent: React.FC<Props> = (props: Props) => {
  const [script, setScript] = React.useState(props.script);
  const getElementWidthById = (elementId: string): number | null => {
    const element = document.getElementById(elementId);
    if (element === null) {
      return null;
    }
    const { width } = element.getBoundingClientRect();
    return width;
  };
  React.useEffect(() => {
    const tableWrapperWidth = getElementWidthById('table-wrapper');
    const tdCharacterWidth = getElementWidthById('td-character');
    const scriptEl = document.getElementById(`script-${props.scriptIndex}`);
    const charArray = scriptEl !== null ? Array.from(scriptEl.children) : [];
    if (tableWrapperWidth && tdCharacterWidth && charArray.length > 0) {
      const scriptMaxWidth = Number(tableWrapperWidth) - Number(tdCharacterWidth) - 12;
      let scriptWidth = 0;
      let newScript = script;
      charArray.forEach((el: Element, index: number) => {
        const { width } = el.getBoundingClientRect();
        scriptWidth += width;
        if (scriptWidth > scriptMaxWidth) {
          const lastSpaceIndex = newScript.substring(0, index).lastIndexOf('␣');
          newScript =
            newScript.substring(0, lastSpaceIndex + 1) +
            '¥' +
            newScript.substring(lastSpaceIndex + 1);
          scriptWidth = 0;
        }
      });
      setScript(newScript);
    }
  }, []);
  const isTypedScript = props.scriptIndex < props.currentScriptIndex;
  return (
    <div id={`script-${props.scriptIndex}`} style={{ width: '100%' }}>
      {script
        ? script.split('').map((char: string, index: number) => {
            const color = props.correctCharCount > index || isTypedScript ? 'black' : 'grey';
            const isNextChar = props.correctCharCount === index;
            const isCurrentScript = props.scriptIndex === props.currentScriptIndex;
            return char === '¥' ? (
              <br />
            ) : (
              <Character
                id={`char_${props.scriptIndex}_${index}`}
                key={`char_${index}`}
                char={char}
                color={color}
                isNextChar={isNextChar}
                isCurrentScript={isCurrentScript}
              />
            );
          })
        : ''}
    </div>
  );
};

export const Script = React.memo(ScriptComponent, (prev, next) => {
  return (
    prev.scriptIndex !== prev.currentScriptIndex && next.scriptIndex !== next.currentScriptIndex
  );
});
