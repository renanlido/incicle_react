import { darken } from 'polished';

import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';

type ButtonProps = {
  bgColor: keyof typeof theme.colors;
  size: 'small' | 'medium' | 'large';
  color: keyof typeof theme.colors;
  format: 'squared' | 'rounded';
};

export const Container = styled.button<ButtonProps>`
  ${({ bgColor, size = 'small', color, format = 'rounded' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    border-radius: ${format === 'rounded' && '20px'};

    width: ${() => {
      if (size === 'small') {
        return `${175}px`;
      }
      if (size === 'medium') {
        return `${200}px`;
      }
      return `${225}px`;
    }};

    padding: ${() => {
      if (size === 'small') {
        return `${5}px 0`;
      }
      if (size === 'medium') {
        return `${10}px 0`;
      }
      return `${20}px 0`;
    }};

    transition: 0.6s background;

    background: ${props => props.theme.colors[bgColor]};
    color: ${props => props.theme.colors[color]};

    &:hover {
      background: ${props => darken(0.2, props.theme.colors[bgColor])};
      color: ${props => darken(0.2, props.theme.colors[color])};
    }
  `}
`;
