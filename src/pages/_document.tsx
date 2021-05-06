import Document, {
    DocumentContext,
    Head,
    Main,
    NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap'
                        rel='stylesheet'
                    />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link rel='stylesheet' type='text/css' href='/global.css' />
                    <link
                        rel='stylesheet'
                        type='text/css'
                        href='/normalize.css'
                    />
                </Head>
                <Main />
                <NextScript />
            </html>
        );
    }
}
