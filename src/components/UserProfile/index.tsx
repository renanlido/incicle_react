import { Avatar } from '../fundation/Avatar';

import ProfileImage from '../../assets/theGoodfather.jpg';
import BackgroundImage from '../../assets/bgTheGoodfather.png';

import { Container, BoxBackgroundTop, BoxBackgroundBottom } from './styles';
import { UserData } from './UserData';
import { UserDetails } from './UserDetails';
import { UserInformations } from './UserInformations';
import { useUserData } from '../../hooks/useUserData';

export const UserProfile: React.FC = () => {
  const { userData } = useUserData();

  return (
    <Container>
      <BoxBackgroundTop src={BackgroundImage} />

      <Avatar src={ProfileImage} title="Imagem de perfil" size={100} />

      <UserInformations>
        <UserData
          username={userData.userName}
          name={userData.name}
          career={userData.employee}
        />

        <UserDetails
          city={userData.city}
          state={userData.state}
          country={userData.country}
          company={userData.company}
          college={userData.college}
        />
      </UserInformations>
      <BoxBackgroundBottom />
    </Container>
  );
};
