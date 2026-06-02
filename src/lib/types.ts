export interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
}

export interface Workout {
  id: number;
  name: string;
  description: string;
  date: string;
  userId: number;
  exercises: Exercise[];
  userName?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}

export type ButtonVariant =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "outline";
