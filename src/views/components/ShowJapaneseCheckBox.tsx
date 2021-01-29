import { Checkbox, createMuiTheme, FormControlLabel, ThemeProvider } from '@material-ui/core';
import React from 'react';

interface Props {
  showJapanese: boolean;
  switchShowJapanese: () => void;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7200da'
    }
  }
});

const ShowJapaneseCheckBoxComponent: React.FC<Props> = (props: Props) => {
  return (
    <FormControlLabel
      control={
        <ThemeProvider theme={theme}>
          <Checkbox
            checked={props.showJapanese}
            onChange={props.switchShowJapanese}
            color="primary"
          />
        </ThemeProvider>
      }
      label="日本語訳を表示する"
    />
  );
};

export const ShowJapaneseCheckBox = React.memo(ShowJapaneseCheckBoxComponent);
