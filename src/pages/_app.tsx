import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta httpEquiv='cache-control' content='public' />
                <meta httpEquiv='Cache-Control' content='max-age=31536000' />
                <meta charSet='utf-8' />
                <meta name='robots' content='noindex' />
                <title>Grow Roadmap</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
