import React from 'react';
import styled from 'styled-components';
import {
  KEY_BORDER_COLOR_DEFAULT,
  KEY_COLOR_CORRECT,
  KEY_COLOR_DEFAULT,
  KEY_COLOR_INCORRECT,
  KEY_FONT_COLOR_DEFAULT,
  KEY_FONT_COLOR_PRESSED
} from '../../../constant/styles';

type Props = {
  text: string;
  width: string;
  keyColor: string;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  const __html = props.text ? props.text.replace(' ', '<br>') : '';
  return (
    <div className={props.className}>
      <div className="innerText" dangerouslySetInnerHTML={{ __html }} />
    </div>
  );
};

const StyledView = styled(View)`
  display: table;
  color: ${(props: Props) =>
    props.keyColor === KEY_COLOR_DEFAULT ? KEY_FONT_COLOR_DEFAULT : KEY_FONT_COLOR_PRESSED};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props: Props) =>
    props.keyColor === KEY_COLOR_DEFAULT ? KEY_BORDER_COLOR_DEFAULT : props.keyColor};
  background-color: ${(props: Props) => props.keyColor};
  width: ${(props: Props) => props.width};
  height: 50px;
  text-align: center;
  border-radius: 5px;
  margin: 1px;
  > .innerText {
    display: table-cell;
    vertical-align: middle;
  }
`;

export const Key = React.memo<Props>(StyledView, (prev, next) => {
  return (
    (prev.keyColor === KEY_COLOR_CORRECT && next.keyColor === KEY_COLOR_INCORRECT) ||
    prev.keyColor === next.keyColor
  );
});
