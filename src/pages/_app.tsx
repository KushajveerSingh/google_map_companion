import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      // mode: 'dark',
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
          libraries={['geometry', 'drawing', 'places']}
        >
          <Component {...pageProps} />
        </LoadScript>
      </ThemeProvider>
    </>
  );
}
