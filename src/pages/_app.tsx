import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "@/theme";
import Head from "next/head";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Transport Booking Company</title>
        </Head>
        <ThemeProvider theme={appTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
