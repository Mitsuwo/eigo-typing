import React from 'react';
import styled from 'styled-components';
import {
  KEY_BORDER_COLOR_DEFAULT,
  KEY_COLOR_CORRECT,
  KEY_COLOR_DEFAULT,
  KEY_COLOR_INCORRECT,
  KEY_FONT_COLOR_DEFAULT,
  KEY_FONT_COLOR_PRESSED
} from '../../constant/styles';

interface Props {
  text: string;
  width: string;
  keyColor: string;
}

export const KeyComponent: React.FC<Props> = (props: Props) => {
  const __html = props.text ? props.text.replace(' ', '<br>') : '';
  return (
    <StyledKey width={props.width} keyColor={props.keyColor}>
      <InnerText dangerouslySetInnerHTML={{ __html }} />
    </StyledKey>
  );
};

const StyledKey = styled.div<{
  width: string;
  keyColor: string;
}>`
  display: table;
  color: ${({ keyColor }) =>
    keyColor === KEY_COLOR_DEFAULT ? KEY_FONT_COLOR_DEFAULT : KEY_FONT_COLOR_PRESSED};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ keyColor }) =>
    keyColor === KEY_COLOR_DEFAULT ? KEY_BORDER_COLOR_DEFAULT : keyColor};
  background-color: ${({ keyColor }) => keyColor};
  width: ${({ width }) => width};
  height: 50px;
  text-align: center;
  border-radius: 5px;
  margin: 1px;
`;

const InnerText = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const Key = React.memo<Props>(KeyComponent, (prev, next) => {
  return (
    (prev.keyColor === KEY_COLOR_CORRECT && next.keyColor === KEY_COLOR_INCORRECT) ||
    prev.keyColor === next.keyColor
  );
});
