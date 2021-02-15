import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { keys } from '../../../constant/keyboardKeys';
import { RootState } from '../../../store';
import { Key } from './Key';

type Props = {
  shiftKey: boolean;
  className?: string;
};

export interface KeyInfo {
  text: string;
  code: string;
  width: string;
}

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      {keys.map((keyRow: KeyInfo[], rowIndex: number) => {
        return (
          <div key={rowIndex}>
            {keyRow.map((keyInfo: KeyInfo) => {
              return <Key key={keyInfo.text} keyInfo={keyInfo} shiftKey={props.shiftKey} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

const StyledView = styled(View)`
  height: 260px;
  width: 814px;
  margin: auto auto 3vh auto;
  > div {
    display: flex;
  }
`;

const Container: React.FC = () => {
  const shiftKey = useSelector((state: RootState) => {
    const { currentKeys } = state.keyboard;
    return currentKeys.some((currentKey: string) => currentKey.startsWith('Shift'));
  });
  return React.useMemo(() => <StyledView shiftKey={shiftKey} />, [shiftKey]);
};

export const Keyboard = React.memo(Container);
