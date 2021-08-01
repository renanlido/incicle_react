import theme from '../../styles/theme';

export type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: keyof typeof theme.sizes;
  fontWeight?: 400 | 700;
  color?: keyof typeof theme.colors;
  lineHeight?: keyof typeof theme.lineHeights;
};
