import { IconButton } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import React from 'react';

interface Props {
  linkTo: (pageName: string) => void;
}

const HomeButtonComponent: React.FC<Props> = (props: Props) => {
  const handleClickToHome = () => {
    props.linkTo('');
  };
  return (
    <div
      style={{
        padding: 'auto',
        position: 'fixed',
        top: '2.5vh',
        left: '4vw',
        zIndex: 1
      }}>
      <IconButton onClick={handleClickToHome} color="primary" size="medium" component="span">
        <HomeOutlined style={{ color: '#808080' }} fontSize="large" />
      </IconButton>
    </div>
  );
};

export const HomeButton = React.memo(HomeButtonComponent);
