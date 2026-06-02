import { Exercise } from "@/lib/types";
import {
  WCard,
  WcardTop,
  WcardName,
  WcardDate,
  WcardDesc,
  WcardBody,
  PillName,
  ExercisePill,
  PillMeta,
  WcardFooter,
  WcardId,
} from "./styles";
import { RemoveBtn } from "@/styles/styles";

interface WorkoutCardProps {
  id: number;
  name: string;
  description: string;
  date: string;
  exercises: Exercise[];
  deleteWorkout: (id: number) => void;
}

const WorkoutCard = ({
  id,
  name,
  description,
  date,
  exercises,
  deleteWorkout,
}: WorkoutCardProps) => {
  return (
    <WCard>
      <WcardTop>
        <WcardName>{name}</WcardName>
        <WcardDate>{date}</WcardDate>
        {description && <WcardDesc>{description}</WcardDesc>}
      </WcardTop>

      {exercises && exercises.length > 0 && (
        <WcardBody>
          {exercises.map((ex, i) => (
            <ExercisePill key={i}>
              <PillName>{ex.name}</PillName>
              <PillMeta>
                {ex.sets} × {ex.reps}
              </PillMeta>
            </ExercisePill>
          ))}
        </WcardBody>
      )}

      <WcardFooter>
        <WcardId>ID: {id}</WcardId>
        <RemoveBtn onClick={() => deleteWorkout(id)}>Remover</RemoveBtn>
      </WcardFooter>
    </WCard>
  );
};

export default WorkoutCard;
