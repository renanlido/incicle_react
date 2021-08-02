import styled, { css } from 'styled-components';
import globalTheme from '../../../../styles/theme';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: keyof typeof globalTheme.colors | 'none';
  display?: 'block' | 'none' | 'flex' | string;
  justifyContent?: 'center' | 'space-between' | string;
  alignItems?: 'center' | string;
  flexDirection?: 'column' | 'row';
  padding?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({
    bgColor = 'white',
    display = 'flex',
    justifyContent,
    alignItems,
    flexDirection = 'row',
    padding = '10px 20px'
  }) => css`
    display: ${display};
    justify-content: ${justifyContent || 'unset'};
    align-items: ${alignItems || 'unset'};
    flex-direction: ${flexDirection};
    width: 100%;
    border-radius: 10px;
    padding: ${padding};
    flex: 1;
    background: ${props => props.theme.colors[bgColor]};
  `}
`;
