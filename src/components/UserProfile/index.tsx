import { Avatar } from '../fundation/Avatar';

import ProfileImage from '../../assets/theGoodfather.jpg';
import BackgroundImage from '../../assets/bgTheGoodfather.png';

import { Container, BoxBackgroundTop, BoxBackgroundBottom } from './styles';
import { UserData } from './UserData';
import { UserDetails } from './UserDetails';
import { UserInformations } from './UserInformations';

const UserProfile: React.FC = () => (
  <Container>
    <BoxBackgroundTop src={BackgroundImage} />

    <Avatar src={ProfileImage} title="Imagem de perfil" size={100} />

    <UserInformations>
      <UserData username="@thegoodfather" name="Marlom Brando" career="Actor" />

      <UserDetails company="Paramount" college="UCLA" />
    </UserInformations>
    <BoxBackgroundBottom />
  </Container>
);

export default UserProfile;
