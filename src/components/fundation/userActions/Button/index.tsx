import { IconBaseProps } from 'react-icons';
import theme from '../../../../styles/theme';
import { IconAndText } from '../../containers/IconAndText';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>;
  text: string;
  bgColor?: keyof typeof theme.colors;
  size?: 'small' | 'medium' | 'large';
  color?: keyof typeof theme.colors;
  format?: 'squared' | 'rounded';
  iconColor?: keyof typeof theme.colors;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  bgColor = 'gray100',
  size = 'small',
  color = 'gray200',
  format = 'rounded',
  ...rest
}) => (
  <Container
    bgColor={bgColor}
    size={size}
    color={color}
    type="button"
    format={format}
    {...rest}
  >
    {icon ? <IconAndText icon={icon} text={text} /> : { text }}
  </Container>
);
