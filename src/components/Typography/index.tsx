import styled, { css } from 'styled-components';

import { TypographyProps } from './types';

export const Headings = styled('h1').attrs<TypographyProps>(({ variant }) => ({
  as: variant
}))<TypographyProps>`
  ${({
    size = 'normal',
    fontWeight = 400,
    color = 'gray300',
    lineHeight = 'medium'
  }) => css`
    font-size: ${props => props.theme.sizes[size]};
    font-weight: ${fontWeight};
    color: ${props => props.theme.colors[color]};
    line-height: ${props => props.theme.lineHeights[lineHeight]};
  `}
`;
