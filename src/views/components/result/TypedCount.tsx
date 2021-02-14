import React from 'react';
import styled from 'styled-components';

type Props = {
  count: number;
  restText: string;
  countColor: string;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <span>{props.count}</span>
      {props.restText}
    </div>
  );
};

export const TypedCount = styled(View)`
  font-size: 3vh;
  font-family: Noto Sans JP;
  color: #808080;
  margin: 1vh 2vw;
  > span {
    color: ${(props: Props) => props.countColor};
    font-weight: bold;
  }
`;
