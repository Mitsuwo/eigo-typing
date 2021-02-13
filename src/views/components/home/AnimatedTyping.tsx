import React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <Typing cursorClassName="cursor" className={props.className}>
      <span>This is English Typing Practice.</span>
      <Typing.Delay ms={2000} />
      <br />
      <span>You can improve your typing speed and learn English.</span>
      <Typing.Delay ms={2000} />
      <br />
      <span>Please click the START button below.</span>
    </Typing>
  );
};

const StyledView = styled(View)`
  margin-top: 10vh;
  height: 20vh;
  text-align: center;
  .cursor {
    color: #e1eef6;
  }
  > span {
    color: #e1eef6;
    font-size: 3vh;
    font-family: serif;
  }
`;

export const AnimatedTyping: React.FC = () => {
  return React.useMemo(() => <StyledView />, []);
};
