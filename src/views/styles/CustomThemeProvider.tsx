import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

type Props = {
  children: JSX.Element;
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7200da'
    },
    secondary: {
      main: '#f9320c'
    }
  }
});

export const CustomThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
