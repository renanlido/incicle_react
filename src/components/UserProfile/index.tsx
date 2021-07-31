import { GrMapLocation } from 'react-icons/gr';
import { BiBuildings } from 'react-icons/bi';

import { Avatar } from '../fundation/Avatar';

import ProfileImage from '../../assets/theGreatFather.jpg';

import { Container, UserInformations, User, UserDetails } from './styles';

const UserProfile: React.FC = () => (
  <Container>
    <Avatar src={ProfileImage} title="Imagem de perfil" size={100} />

    <UserInformations>
      <User>
        <h1>Marlon Brando</h1>
        <h4>@thegreatfather</h4>
        <span>Actor</span>
      </User>

      <UserDetails>
        <div>
          <GrMapLocation />
          Omaha/Nebraska - USA
        </div>

        <div>
          <span>
            <BiBuildings />
            Paramount Pictures
          </span>
          <span>
            <BiBuildings />
            Paramount Pictures
          </span>
        </div>

        <div>
          <span>
            <BiBuildings />
            Paramount Pictures
          </span>
          <span>
            <BiBuildings />
            Paramount Pictures
          </span>
        </div>
      </UserDetails>
    </UserInformations>
  </Container>
);

export default UserProfile;
