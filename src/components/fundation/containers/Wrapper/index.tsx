import theme from '../../../../styles/theme';
import { Container as StyledContainer } from './styles';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgColor?: keyof typeof theme.colors | 'none';
  display?: 'block' | 'none' | 'flex' | string;
  justifyContent?: 'center' | 'space-between' | string;
  alignItems?: 'center' | string;
  flexDirection?: 'column' | 'row';
  padding?: string;
}

export const Container: React.FC<ContainerProps> = ({
  bgColor = 'white',
  children,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  padding,
  ...rest
}) => (
  <StyledContainer
    bgColor={bgColor || 'none'}
    display={display}
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexDirection={flexDirection}
    padding={padding}
    {...rest}
  >
    {children}
  </StyledContainer>
);
