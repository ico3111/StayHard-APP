import { FaPlus } from "react-icons/fa";

import { LinksCard } from "./styles";

interface LinkCardProps {
  link: string;
  text: string;
  isAdd?: boolean;
}

const LinkCard = ({ link, text, isAdd = true }: LinkCardProps) => {
  return (
    <LinksCard href={link}>
      {isAdd ? <FaPlus fontSize={14} /> : null}
      <span>{text}</span>
    </LinksCard>
  );
};

export default LinkCard;
