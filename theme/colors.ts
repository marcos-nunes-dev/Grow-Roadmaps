export interface ColorHues {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    base?: string;
}

export type Colors = typeof colors;

const wine = {
    50: '#FAE2E8',
    100: '#F2B7C6',
    200: '#E98AA0',
    300: '#DF5D7C',
    400: '#D63E62',
    500: '#CE234B',
    600: '#BF2049',
    700: '#AA1C45',
    800: '#961741',
    900: '#72113A',
};

const gray = {
    50: '#F7F9FA',
    100: '#DDDFE1',
    200: '#C3C5C8',
    300: '#AAACAE',
    400: '#909295',
    500: '#76787C',
    600: '#5C5E63',
    700: '#434549',
    800: '#292B30',
    900: '#0F1117',
};

const green = {
    50: '#E7F5E6',
    100: '#C6E5C2',
    200: '#A2D59A',
    300: '#7BC571',
    400: '#5EB952',
    500: '#40AD31',
    600: '#369E28',
    700: '#298C1C',
    800: '#1A7B10',
    900: '#005D00',
};

const blue = {
    50: '#E8EBFA',
    100: '#C3CCF3',
    200: '#9BABEB',
    300: '#6F8AE3',
    400: '#4A70DD',
    500: '#1156D6',
    600: '#044ECB',
    700: '#0043BF',
    800: '#0039B3',
    900: '#0025A1',
};

const orange = {
    50: '#FEF2DE',
    100: '#FDDEAE',
    200: '#FBC979',
    300: '#FAB341',
    400: '#F9A20A',
    500: '#F89300',
    600: '#F58700',
    700: '#EF7700',
    800: '#EA6600',
    900: '#E14A00',
};

const red = {
    50: '#FFECF0',
    100: '#FECFD6',
    200: '#EF9DA2',
    300: '#E6787E',
    400: '#F2585E',
    500: '#F84846',
    600: '#E93F45',
    700: '#D7363E',
    800: '#CA3037',
    900: '#BB252C',
};

const purple = {
    50: '#eeebff',
    100: '#cec6ff',
    200: '#b2a5ff',
    300: '#9482ff',
    400: '#7d67ff',
    500: '#5b42f3',
    600: '#4427f1',
    700: '#351ad3',
    800: '#1f0b98',
    900: '#0d005d',
};

const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    wine,
    gray,
    green,
    blue,
    orange,
    red,
    primary: purple['600'],
    success: '#2adf59',
    info: blue['500'],
    alert: orange['300'],
    error: red['700'],
};

export default colors;
