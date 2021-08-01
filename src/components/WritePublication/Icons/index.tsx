import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

type IconProps = {
  firstIcon: React.ComponentType<IconBaseProps>;
  secondIcon?: React.ComponentType<IconBaseProps>;
};

export const Icons: React.FC<IconProps> = ({
  firstIcon: FirstIcon,
  secondIcon: SecondIcon
}) => (
  <Container>
    <FirstIcon size={26} />
    {SecondIcon && <SecondIcon size={26} />}
  </Container>
);
