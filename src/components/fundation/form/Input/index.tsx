import { useTheme } from 'styled-components';
import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  name: string;
}

export const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Container>
      {Icon && <Icon size={30} color={colors.gray100} />}
      <input {...rest} />
    </Container>
  );
};
