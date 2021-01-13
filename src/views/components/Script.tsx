import React from 'react';
import { INDENTION_MARK, SPACE_VIEW } from '../../constant/typingConst';
import { Character } from '../components/Character';

interface Props {
  script: string;
  correctCharCount: number;
  scriptIndex: number;
  currentScriptIndex: number;
  tableWrapperRect: DOMRect | undefined;
}

const ScriptComponent: React.FC<Props> = (props: Props) => {
  const [script, setScript] = React.useState(props.script);
  React.useEffect(() => {
    const scriptEl = document.getElementById(`script-${props.scriptIndex}`);
    const scriptRect = scriptEl?.getBoundingClientRect();
    const charArray = scriptEl !== null ? Array.from(scriptEl.children) : [];
    if (
      props.tableWrapperRect === undefined ||
      scriptRect === undefined ||
      !props.tableWrapperRect.width ||
      !props.tableWrapperRect.left ||
      !scriptRect.left ||
      charArray.length === 0
    ) {
      return;
    }
    const SCRIPT_MARGIN_RIGHT = 10;
    const scriptMaxWidth =
      props.tableWrapperRect.width +
      props.tableWrapperRect.left -
      scriptRect.left -
      SCRIPT_MARGIN_RIGHT;
    let scriptWidth = 0;
    let newScript = script;
    for (let i = 0; i < charArray.length; i++) {
      const { width } = charArray[i].getBoundingClientRect();
      scriptWidth += width;
      if (scriptWidth > scriptMaxWidth) {
        const lastSpaceIndex = newScript.substring(0, i).lastIndexOf(SPACE_VIEW);
        newScript =
          newScript.substring(0, lastSpaceIndex + 1) +
          INDENTION_MARK +
          newScript.substring(lastSpaceIndex + 1);
        scriptWidth = 0;
        i = lastSpaceIndex;
      }
    }
    setScript(newScript);
  }, [props.tableWrapperRect?.left, props.tableWrapperRect?.width]);
  const isTypedScript = props.scriptIndex < props.currentScriptIndex;
  return (
    <div id={`script-${props.scriptIndex}`} style={{ width: '100%' }}>
      {script
        ? script.split('').map((char: string, index: number) => {
            const color = props.correctCharCount > index || isTypedScript ? 'black' : 'grey';
            const isNextChar = props.correctCharCount === index;
            const isCurrentScript = props.scriptIndex === props.currentScriptIndex;
            return char === INDENTION_MARK ? (
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
