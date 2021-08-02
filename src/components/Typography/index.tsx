import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: keyof typeof theme.sizes;
  fontWeight?: 400 | 700;
  color?: keyof typeof theme.colors;
  lineHeight?: keyof typeof theme.lineHeights;
};

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
