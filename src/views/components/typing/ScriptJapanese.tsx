import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';

type Props = {
  visible: boolean;
  scriptJapanese: string;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return <div className={props.className}>{props.scriptJapanese}</div>;
};

const StyledView = styled(View)`
  display: ${(props: Props) => (props.visible ? 'block' : 'none')};
  margin: 2vw;
  font-size: 3vh;
  font-family: Noto Sans JP;
  color: grey;
`;

const Container: React.FC = () => {
  const { showJapanese } = useSelector((state: RootState) => state.appBase);
  const scriptJapanese = useSelector((state: RootState) => {
    const { currentScript } = state.typingContent;
    return currentScript ? currentScript.japanese : '';
  });
  return React.useMemo(
    () => <StyledView visible={showJapanese} scriptJapanese={scriptJapanese} />,
    [showJapanese, scriptJapanese]
  );
};

export const ScriptJapanese = React.memo(Container);
