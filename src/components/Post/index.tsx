import { useState } from 'react';

import { RiShareForwardBoxFill } from 'react-icons/ri';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';

import { Button } from '../fundation/userActions/Button';
import { Title } from './Title';
import { ContainerIconAndTexts } from './ContainerIconAndTexts';
import { Divider } from '../fundation/html/Divider';
import { Headings } from '../Typography';
import { useUserData } from '../../hooks/useUserData';

import { Container, ContainerButton } from './styles';

type PostData = {
  text: string;
};

export const Post: React.FC<PostData> = ({ text }) => {
  const { userData } = useUserData();
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <Container
      flexDirection="column"
      bgColor="white"
      alignItems="flex-start"
      className="container"
    >
      <Title avatar={userData.avatar} username={userData.name} />

      <Headings className="postText">{text}</Headings>

      <ContainerIconAndTexts
        text={`${like ? '1' : 'Seja o primeiro a curtir'}`}
      />

      <Divider />

      <ContainerButton>
        <Button icon={BiLike} text="Curtir" onClick={handleLike} />
        <Button icon={IoChatboxEllipsesOutline} text="Comentários" />
        <Button icon={RiShareForwardBoxFill} text="Compartilhar" />
      </ContainerButton>

      <Divider />
    </Container>
  );
};
