import { Headings } from '../../Typography';

import { Container } from './styles';

type UserDataProps = {
  name: string;
  username: string;
  career: string;
};

export const UserData: React.FC<UserDataProps> = ({
  name,
  username,
  career
}) => (
  <Container>
    <Headings color="blue100" size="large" lineHeight="medium" fontWeight={700}>
      {name}
    </Headings>
    <Headings
      variant="h4"
      fontWeight={700}
      color="gray400"
      size="small"
      lineHeight="xsmall"
      className="user-name"
    >
      {username}
    </Headings>
    <Headings variant="h5" lineHeight="xsmall" color="gray300" size="small">
      {career}
    </Headings>
  </Container>
);
