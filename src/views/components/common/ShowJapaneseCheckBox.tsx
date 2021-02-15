import React from 'react';
import { Checkbox, createStyles, FormControlLabel, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setShowJapanese } from '../../../store/AppBase/actions';
import { RootState } from '../../../store';
import { AppLabel } from './AppLabel';

type Props = {
  showJapanese: boolean;
  fontColor: string;
  onChange: () => void;
  label?: JSX.Element;
  className?: string;
};

type ContainerProps = {
  fontColor: string;
};

const View: React.FC<Props> = (props: Props) => {
  const createClasses = makeStyles(() =>
    createStyles({
      root: {
        color: props.fontColor,
        '&$checked': {
          color: '#e97f02'
        }
      },
      checked: {}
    })
  );
  const classes = createClasses();
  return (
    <FormControlLabel
      className={props.className}
      control={
        <Checkbox
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
          checked={props.showJapanese}
          onChange={props.onChange}
        />
      }
      label={props.label}
    />
  );
};

const StyledView = React.memo(
  styled(View)`
    padding: 2vh;
  `,
  (prev, next) => prev.showJapanese === next.showJapanese
);

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { showJapanese } = useSelector((state: RootState) => state.appBase);
  const dispatch = useDispatch();
  const switchShowJapanese = () => {
    dispatch(setShowJapanese(!showJapanese));
  };
  return (
    <StyledView
      showJapanese={showJapanese}
      onChange={switchShowJapanese}
      fontColor={props.fontColor}
      label={<AppLabel fontColor={props.fontColor} text="日本語訳を表示する" />}
    />
  );
};

export const ShowJapaneseCheckBox = React.memo(Container);
