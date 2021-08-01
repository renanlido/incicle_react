import { useTheme } from 'styled-components';

import { FaMapMarkedAlt } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';

import { Container } from './styles';

type UserDetailsProps = {
  city: string;
  state: string;
  country: string;
  company: string;
  college: string;
};

export const UserDetails: React.FC<UserDetailsProps> = ({
  company,
  college,
  city,
  state,
  country
}) => {
  const { colors } = useTheme();

  return (
    <Container>
      <div className="location">
        <FaMapMarkedAlt color={colors.blue100} />
        {`${city}/${state} - ${country}`}
      </div>

      <div className="formation">
        <span>
          <BiBuildings color={colors.gray200} />
          {company}
        </span>
        <span>
          <BiBuildings />
          {college}
        </span>
      </div>
    </Container>
  );
};
