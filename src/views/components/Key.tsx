import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  width: string;
  isCurrentKey: boolean;
}

export const Key: React.FC<Props> = (props: Props) => {
  const __html: string = props.text ? props.text.replace(' ', '<br>') : '';
  return (
    <StyledKey
      width={props.width}
      disabled={!props.text && props.width !== '278px'}
      isCurrentKey={props.isCurrentKey}>
      <InnerText dangerouslySetInnerHTML={{ __html }} />
    </StyledKey>
  );
};

const StyledKey = styled.div<{ width: string; disabled: boolean; isCurrentKey: boolean }>`
  display: table;
  color: ${({ disabled }) => (disabled ? 'white' : 'black')};
  border: 2px solid
    ${({ disabled, isCurrentKey }) => (disabled ? 'grey' : isCurrentKey ? 'blue' : 'black')};
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
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
