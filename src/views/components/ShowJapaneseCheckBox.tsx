import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { CustomThemeProvider } from '../styles/CustomThemeProvider';

interface Props {
  showJapanese: boolean;
  switchShowJapanese: () => void;
}

const ShowJapaneseCheckBoxComponent: React.FC<Props> = (props: Props) => {
  return (
    <FormControlLabel
      control={
        <CustomThemeProvider>
          <Checkbox
            checked={props.showJapanese}
            onChange={props.switchShowJapanese}
            color="primary"
          />
        </CustomThemeProvider>
      }
      label="日本語訳を表示する"
    />
  );
};

export const ShowJapaneseCheckBox = React.memo(ShowJapaneseCheckBoxComponent);
