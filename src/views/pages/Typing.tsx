import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import scriptsJson from '../../constant/corpus.json';
import { RootState } from '../../store';
import { Script } from '../../store/TypingContent/types';
import { CountDown } from '../components/typing/CountDown';
import { Keyboard } from '../components/typing/Keyboard';
import { setNextKey, clearCorrectCharCount } from '../../store/Keyboard/actions';
import { resetResultState } from '../../store/Result/actions';
import {
  resetTypingContentState,
  setCurrentScript,
  setScripts
} from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/common/ShowJapaneseCheckBox';
import { HomeButton } from '../components/common/HomeButton';
import { ScriptParent } from '../components/typing/ScriptParent';
import { shuffleArray } from '../../utils/array';

const View: React.FC = () => {
  return (
    <div>
      <HomeButton />
      <CountDown />
      <ScriptParent />
      <div style={{ right: '5vw', color: '#808080', position: 'absolute' }}>
        Translation by{' '}
        <a href="http://www.edrdg.org/wiki/index.php/Tanaka_Corpus">Yasuhito Tanaka</a>
      </div>
      <div style={{ marginLeft: '5vw' }}>
        <ShowJapaneseCheckBox fontColor="#808080" />
      </div>
      <Keyboard />
    </div>
  );
};

const Container: React.FC = () => {
  const { currentScriptIndex } = useSelector((state: RootState) => state.typingContent);
  const dispatch = useDispatch();
  React.useEffect(() => {
    initialize();
  }, []);
  const initialize = () => {
    dispatch(clearCorrectCharCount());
    dispatch(resetTypingContentState());
    dispatch(resetResultState());
    let scripts: Script[] = JSON.parse(JSON.stringify(scriptsJson));
    scripts = shuffleArray<Script>(scripts);
    dispatch(setScripts(scripts));
    dispatch(setCurrentScript(scripts[currentScriptIndex]));
    dispatch(setNextKey(scripts[currentScriptIndex].english[0]));
  };
  return React.useMemo(() => <View />, []);
};

export const Typing = React.memo(Container);
