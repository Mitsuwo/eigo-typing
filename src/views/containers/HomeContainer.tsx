import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action } from 'redux';
import { setCurrentContainer } from '../../store/ContainerManager/actions';
import { ContainerManagerState } from '../../store/ContainerManager/types';

interface DispatchToProps {
  setCurrentContainer: (containerManagerState: ContainerManagerState) => void;
}

type Props = DispatchToProps;

const Home: React.FC<Props> = (props: Props) => {
  const handleClickLink = () => {
    props.setCurrentContainer({ currentContainer: 'typing' });
  };
  return (
    <div>
      <div>This is home.</div>
      <Link to="/typing" onClick={handleClickLink}>
        スタート
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchToProps => {
  return {
    setCurrentContainer: (containerManagerState: ContainerManagerState) => {
      dispatch(setCurrentContainer(containerManagerState));
    }
  };
};

export const HomeContainer = connect(null, mapDispatchToProps)(Home);
