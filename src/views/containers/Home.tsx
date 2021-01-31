import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from '@material-ui/core';
import { RootState } from '../../store';
import { resetPageManager, setAppState } from '../../store/PageManager/actions';
import { APP_STATE_TYPING } from '../../store/PageManager/types';
import { setShowJapanese } from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/ShowJapaneseCheckBox';
import { CustomThemeProvider } from '../styles/CustomThemeProvider';

const HomeContainer: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { showJapanese } = useSelector((state: RootState) => state.typingContent);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetPageManager());
  }, []);
  const switchShowJapanese = () => {
    dispatch(setShowJapanese(!showJapanese));
  };
  const linkToTyping = () => {
    dispatch(setAppState(APP_STATE_TYPING));
    props.history.push('/typing');
  };
  return (
    <div
      style={{ height: '100vh', width: '100vw', backgroundColor: '#f9c00c', paddingTop: '25vh' }}>
      <div
        style={{
          color: '#e1eef6',
          fontSize: '40px',
          textAlign: 'center',
          fontFamily: 'bokutachi'
        }}>
        えいごでタイピング
      </div>
      <div style={{ height: '25vh' }} />
      <CustomThemeProvider>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '25vw',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}>
          <Button variant="contained" color="secondary" onClick={linkToTyping}>
            <p style={{ color: '#e1eef6', fontSize: '20px' }}>START</p>
          </Button>
          <ShowJapaneseCheckBox
            showJapanese={showJapanese}
            switchShowJapanese={switchShowJapanese}
          />
        </div>
      </CustomThemeProvider>
    </div>
  );
};

export const Home = withRouter(HomeContainer);
