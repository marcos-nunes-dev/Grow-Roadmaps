import { useEffect } from 'react';
import Head from 'next/head';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { RoadmapTitle } from 'components/RoadmapTitle';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box border='marcos'>aasdad</Box>
            <Text as='h1'>asodkaosdka</Text>
            <RoadmapTitle
                languageName='Javascript'
                languageIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
            />
        </Box>
    );
}
