import { FaChevronDown } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { IoMdAlarm } from 'react-icons/io';
import { Avatar } from '../../fundation/Avatar';
import { Headings } from '../../Typography';

import { Container, Content, ContainerTitle, ContentTitle } from './styles';

type TitleProps = {
  avatar: string;
  username: string;
};

export const Title: React.FC<TitleProps> = ({ avatar, username }) => (
  <Container>
    <Content>
      <Avatar src={avatar} title="Avatar" size={50} />

      <ContainerTitle>
        <Headings
          variant="h1"
          fontWeight={700}
          color="green100"
          size="normal"
          lineHeight="small"
        >
          {username}
        </Headings>

        <ContentTitle>
          <span>
            <IoMdAlarm size={12} />
            há cerca de 8 horas
          </span>

          <span>
            <GiPadlock size={12} />
            Somente eu
          </span>
        </ContentTitle>
      </ContainerTitle>
    </Content>

    <FaChevronDown size={10} />
  </Container>
);
