import { BiLike } from 'react-icons/bi';
import { IconAndText } from '../../fundation/containers/IconAndText';

import { Container } from './styles';

type ContainerIconAndTextsProps = {
  text: string;
};

export const ContainerIconAndTexts: React.FC<ContainerIconAndTextsProps> = ({
  text
}) => (
  <Container>
    <IconAndText icon={BiLike} size={20} text={text} className="iconAndText" />
    <div>
      <IconAndText size={20} text="0 comentários" className="iconAndText" />
      <IconAndText
        size={20}
        text="0 compartilhamentos"
        className="iconAndText"
      />
    </div>
  </Container>
);
