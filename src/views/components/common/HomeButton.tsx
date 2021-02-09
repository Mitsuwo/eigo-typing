import React from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';

type Props = {
  handleClickToHome: () => void;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <IconButton
      className={props.className}
      onClick={props.handleClickToHome}
      color="primary"
      size="medium"
      component="span">
      <HomeOutlined className="home-outlined" fontSize="large" />
    </IconButton>
  );
};

const StyledView = styled(View)`
  padding: auto;
  position: fixed;
  top: 2.5vh;
  left: 4vw;
  z-index: 1;
  > .home-outlined {
    color: #808080;
  }
`;

export const HomeButton: React.FC = () => {
  const { history } = useReactRouter();
  const handleClickToHome = () => {
    history.push('/');
  };
  return React.useMemo(() => <StyledView handleClickToHome={handleClickToHome} />, []);
};
