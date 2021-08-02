import { Post } from '../../components/Post';
import { UserProfile } from '../../components/UserProfile';

import { WritePublication } from '../../components/WritePublication';
import { Container, Content, CenterContent, EndContent } from './styles';

import { BirthdayCard } from '../../components/BirthdayCard';
import { PendencyCard } from '../../components/PendencyCard';

export const Home: React.FC = () => {
  const posts = [
    {
      id: 1,
      text: 'Suave na nave'
    },
    {
      id: 2,
      text: 'De boa na lagoa'
    }
  ];

  return (
    <Container>
      <Content>
        <UserProfile />

        <CenterContent>
          <WritePublication />
          {posts.map(post => (
            <Post key={post.id} text={post.text} />
          ))}
        </CenterContent>

        <EndContent>
          <BirthdayCard text="Nenhum dos seus amigos comemora aniversário hoje" />
          <PendencyCard text="Pendências" date="Seg, 24 de Mar" />
        </EndContent>
      </Content>
    </Container>
  );
};
