import { IconBaseProps } from 'react-icons/lib';
import theme from '../../../../styles/theme';
import { Container } from './styles';

interface IconAndTextProps extends IconBaseProps {
  text: React.ReactNode;
  icon?: React.ComponentType<IconBaseProps>;
  color?: keyof typeof theme.colors;
}

export const IconAndText: React.FC<IconAndTextProps> = ({
  icon: Icon,
  text,
  color,
  ...rest
}) => (
  <Container>
    {Icon && <Icon {...rest} color={`${color}!important`} />}
    {text}
  </Container>
);
