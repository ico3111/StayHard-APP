import { Workout } from "./types";

export const workout: Workout = {
  id: 1,
  name: "peito",
  description: "treino bom, mas dor no ombro",
  date: "25-10-2025",
  exercises: [
    { id: 1, name: "supino reto", sets: 4, reps: 10 },
    { id: 2, name: "supino inclinado", sets: 3, reps: 12 },
    { id: 3, name: "crucifixo", sets: 3, reps: 15 },
  ],
  userId: 1,
  userName: "Enrico",
};

export const workout2: Workout = {
  id: 2,
  name: "costas",
  description: "treino puxado, fadiga e desânimo",
  date: "25-10-2025",
  exercises: [
    { id: 4, name: "puxada aberta", sets: 4, reps: 12 },
    { id: 5, name: "remada baixa", sets: 4, reps: 10 },
    { id: 6, name: "remada curvada", sets: 3, reps: 8 },
    { id: 7, name: "serrote", sets: 3, reps: 12 },
  ],
  userId: 1,
  userName: "Enrico",
};

export const workout3: Workout = {
  id: 3,
  name: "pernas",
  description: "treino forte, cansa bastante",
  date: "25-10-2025",
  exercises: [
    { id: 8, name: "agachamento livre", sets: 4, reps: 8 },
    { id: 9, name: "leg press", sets: 4, reps: 10 },
    { id: 10, name: "cadeira extensora", sets: 3, reps: 15 },
    { id: 11, name: "stiff", sets: 3, reps: 12 },
  ],
  userId: 1,
  userName: "Enrico",
};

// Se quiser mais:
export const workout4: Workout = {
  id: 4,
  name: "ombro",
  description: "treino leve, sem dores",
  date: "25-10-2025",
  exercises: [
    { id: 12, name: "desenvolvimento", sets: 4, reps: 10 },
    { id: 13, name: "elevação lateral", sets: 3, reps: 15 },
    { id: 14, name: "elevação frontal", sets: 3, reps: 12 },
  ],
  userId: 1,
  userName: "Enrico",
};
