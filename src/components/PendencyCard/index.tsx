import { Card } from '../fundation/containers/Card';

import houglass from '../../assets/houglass.svg';

type PendencyProps = {
  text: string;
  date: string;
};

export const PendencyCard: React.FC<PendencyProps> = ({ text, date }) => (
  <Card icon={houglass} title="Pendências" text={text} date={date} />
);
