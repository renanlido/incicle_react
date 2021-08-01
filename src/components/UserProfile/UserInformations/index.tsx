import { Container } from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

export const UserInformations: React.FC<ContainerProps> = ({ children }) => (
  <Container>{children}</Container>
);
