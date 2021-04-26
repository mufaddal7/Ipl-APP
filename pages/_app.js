import '../styles/global.css'
import React, { useEffect } from "react";
import App from "next/app";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#296ba0',
    },
    secondary: {
      main: '#19857b',
    },
    black: {
      main: '#000000',
    },
    companyBlue: {
      backgroundColor: '#65CFE9',
      color: '#fff',
    },
    companyRed: {
      backgroundColor: '#E44D69',
      color: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});


function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (
  //     !("serviceWorker" in navigator) ||
  //     process.env.NODE_ENV !== "production"
  //   ) {
  //     console.warn("Progressive Web App support is disabled");
  //     return;
  //   }
  //   const wb = new Workbox("sw.js", { scope: "/" });
  //   wb.register();
  // }, []);

  MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}
  return (
    <React.Fragment>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
export default MyApp;
