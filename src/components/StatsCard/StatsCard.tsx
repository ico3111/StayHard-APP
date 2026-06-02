import { StatCard, StatLabel, StatValue } from "./styles";

interface StatsCardProps {
  statusName: string;
  statusValue: number;
}

const StatsCard = ({ statusName, statusValue }: StatsCardProps) => {
  return (
    <StatCard>
      <StatLabel>{statusName}</StatLabel>
      <StatValue>{statusValue}</StatValue>
    </StatCard>
  );
};

export default StatsCard;
