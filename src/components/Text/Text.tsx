import React, { useMemo } from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { typography, TypographyProps } from 'styled-system';
import Truncate, { TruncateProps } from 'react-truncate';
import { Box, BoxProps } from '../Box';

export type TextPropsStyled = BoxProps & TypographyProps;

export type TextProps = TextPropsStyled & {
    truncate?: TruncateProps;
    as?: any;
    htmlFor?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const TextStyled = styled(Box).attrs((props) => ({
    color: props.color || 'textGray',
}))<TextProps>`
    ${typography} ::selection {
        background-color: ${theme('resume.textLightGray')};
    }
`;

export const Text: React.FC<TextProps> = ({ children, truncate, ...props }) => {
    const content = useMemo(() => {
        if (!!truncate) {
            return <Truncate {...truncate}>{children}</Truncate>;
        }
        return children;
    }, [truncate]);

    return <TextStyled {...props}>{content}</TextStyled>;
};
