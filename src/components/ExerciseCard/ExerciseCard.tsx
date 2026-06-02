import { RemoveBtn } from "@/styles/styles";
import { ExBadge, ExBody, ExCard, ExFooter, ExHeader, ExName } from "./styles";

interface ExerciseCardProps {
  id: number;
  name: string;
  sets: number;
  reps: number;
  deleteExercise: (id: number) => void;
}

const ExerciseCard = ({
  id,
  name,
  sets,
  reps,
  deleteExercise,
}: ExerciseCardProps) => {
  return (
    <ExCard>
      <ExHeader>
        <ExName>{name}</ExName>
      </ExHeader>
      <ExBody>
        <ExBadge>
          Séries <span>{sets}</span>
        </ExBadge>
        <ExBadge>
          Reps <span>{reps}</span>
        </ExBadge>
      </ExBody>
      <ExFooter>
        <span>ID: {id}</span>
        <RemoveBtn onClick={() => deleteExercise(id)}>Remover</RemoveBtn>
      </ExFooter>
    </ExCard>
  );
};

export default ExerciseCard;
