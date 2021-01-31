import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent: React.FC = () => {
  return (
    <div style={{ marginTop: '10vh', height: '25vh', textAlign: 'center' }}>
      <Typing>
        <div style={{ color: '#e1eef6', fontSize: '25px' }}>
          This is English Typing Practice.
          <Typing.Delay ms={1000} />
          <br />
          You can improve your typing speed and learn English.
          <Typing.Delay ms={1000} />
          <br />
          Please click the START button below.
        </div>
      </Typing>
    </div>
  );
};

export const AnimatedTyping = React.memo(AnimatedTypingComponent);
