import React from 'react';
import { Checkbox, createStyles, FormControlLabel, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { AppLabel } from './AppLabel';

type Props = {
  showJapanese: boolean;
  fontColor: string;
  onChange: () => void;
  label?: JSX.Element;
  className?: string;
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

const StyledView = styled(View)`
  padding: 2vh;
`;

export const ShowJapaneseCheckBox: React.FC<Props> = (props: Props) => {
  return React.useMemo(
    () => (
      <StyledView
        showJapanese={props.showJapanese}
        fontColor={props.fontColor}
        onChange={props.onChange}
        label={<AppLabel fontColor={props.fontColor} text="日本語訳を表示する" />}
      />
    ),
    [props.showJapanese, props.fontColor]
  );
};
