import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

type DividerProps = {
  color?: keyof typeof theme.colors;
  height?: string;
};

export const Divider = styled.div<DividerProps>`
  ${({ color = 'gray100', height }) => css`
    width: 100%;
    height: ${height};
    background: ${props => props.theme.colors[color]};
  `}
`;
