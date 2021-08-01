// import { useTheme } from 'styled-components';
import { GrNotes } from 'react-icons/gr';
import { IoImagesOutline } from 'react-icons/io5';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import { Input } from '../fundation/form/Input';
import { Icons } from './Icons';

import { Container } from './styles';

export const WritePublication: React.FC = () => (
  <Container>
    <div className="container-input">
      <Input
        icon={GrNotes}
        name="post"
        placeholder="Escreva uma publigação..."
      />
      <Icons firstIcon={IoImagesOutline} secondIcon={VscDeviceCameraVideo} />
    </div>
    <div className="footer">
      ou <span>publique um artigo</span> na InCicle
    </div>
  </Container>
);
