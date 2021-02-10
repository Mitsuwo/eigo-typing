import React from 'react';
import styled from 'styled-components';

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
  font-family: koruri;
  color: grey;
`;

export const ScriptJapanese: React.FC<Props> = (props: Props) => {
  return React.useMemo(
    () => <StyledView visible={props.visible} scriptJapanese={props.scriptJapanese} />,
    [props.visible, props.scriptJapanese]
  );
};
