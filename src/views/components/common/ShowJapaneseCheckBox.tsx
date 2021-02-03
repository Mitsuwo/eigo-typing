import React from 'react';
import { Checkbox, createStyles, FormControlLabel, makeStyles } from '@material-ui/core';

interface Props {
  showJapanese: boolean;
  fontColor: string;
  switchShowJapanese: () => void;
}

const ShowJapaneseCheckBoxComponent: React.FC<Props> = (props: Props) => {
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
        label={
          <div style={{ color: props.fontColor, fontFamily: 'koruri', fontWeight: 'bold' }}>
            日本語訳を表示する
          </div>
        }
      />
    </div>
  );
};

export const ShowJapaneseCheckBox = React.memo(ShowJapaneseCheckBoxComponent);
