import React from 'react';
import { Checkbox, createStyles, FormControlLabel, makeStyles } from '@material-ui/core';

interface Props {
  showJapanese: boolean;
  fontColor: string;
  switchShowJapanese: () => void;
}

const createClasses = makeStyles(() =>
  createStyles({
    root: {
      color: '#e1eef6',
      '&$checked': {
        color: '#7200da'
      }
    },
    checked: {}
  })
);

const ShowJapaneseCheckBoxComponent: React.FC<Props> = (props: Props) => {
  const classes = createClasses();
  return (
    <div style={{ padding: '2vh' }}>
      <FormControlLabel
        control={
          <Checkbox
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            checked={props.showJapanese}
            onChange={props.switchShowJapanese}
          />
        }
        style={{ color: props.fontColor }}
        label="日本語訳を表示する"
      />
    </div>
  );
};

export const ShowJapaneseCheckBox = React.memo(ShowJapaneseCheckBoxComponent);
