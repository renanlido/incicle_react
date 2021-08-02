import { IconBaseProps } from 'react-icons';
import { Headings } from '../../../Typography';
import { Divider } from '../../html/Divider';

import { Container, Date } from './styles';

type CardProps = {
  icon?: React.ComponentType<IconBaseProps> | string;
  title: string;
  text: string;
  date?: string;
};

export const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  text,
  date
}) => (
  <Container padding="0" flexDirection="column">
    <Headings variant="h1" size="normal" color="green100" className="title">
      {Icon && typeof Icon === 'string' && (
        <img src={Icon} alt={title} width="30px" />
      )}
      {Icon && typeof Icon !== 'string' && <Icon />}
      {title}
    </Headings>

    {date ? <Date>{date}</Date> : <Divider height="8px" />}

    <Headings variant="p" className="text">
      {text}
    </Headings>
  </Container>
);
