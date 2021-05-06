import styled from 'styled-components';
import {
    compose,
    space,
    layout,
    color,
    flexbox,
    background,
    border,
    position,
    shadow,
    grid,
    typography,
    SpaceProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    GridProps,
    TypographyProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
    LayoutProps &
    ColorProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    ShadowProps &
    GridProps &
    TypographyProps;

export const Box = styled.div<BoxProps>`
    ${compose(
        space,
        layout,
        color,
        flexbox,
        background,
        border,
        position,
        shadow,
        grid,
        typography
    )}
`;
