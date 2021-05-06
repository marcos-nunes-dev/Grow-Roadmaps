import { useEffect } from 'react';
import Head from 'next/head';
import { Box } from 'components/Box';
import { Text } from 'components/Text';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box border='marcos'>aasdad</Box>
            <Text as='h1'>asodkaosdka</Text>
        </Box>
    );
}
