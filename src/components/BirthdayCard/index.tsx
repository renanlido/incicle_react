import { Card } from '../fundation/containers/Card';

import cakeBirthday from '../../assets/cakeBirthday.svg';

type BirthdayCardProps = {
  text: string;
};

export const BirthdayCard: React.FC<BirthdayCardProps> = ({ text }) => (
  <Card icon={cakeBirthday} title="Aniversariantes" text={text} />
);
