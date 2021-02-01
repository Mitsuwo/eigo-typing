import React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';

const AnimatedTypingComponent: React.FC = () => {
  return (
    <StyledAnimatedTyping>
      <Typing cursorClassName="cursor">
        <div style={{ color: '#e1eef6', fontSize: '3vh', fontFamily: 'oxygenMono' }}>
          <span>This is English Typing Practice.</span>
          <Typing.Delay ms={2000} />
          <br />
          <span>You can improve your typing speed and learn English.</span>
          <Typing.Delay ms={2000} />
          <br />
          <span>Please click the START button below.</span>
        </div>
      </Typing>
    </StyledAnimatedTyping>
  );
};

const StyledAnimatedTyping = styled.div`
  margin-top: 10vh;
  height: 20vh;
  text-align: center;
  .cursor {
    color: #e1eef6;
  }
`;

export const AnimatedTyping = React.memo(AnimatedTypingComponent);
