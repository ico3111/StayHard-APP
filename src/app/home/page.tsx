"use client";

import { useCallback, useEffect, useState } from "react";
import { Exercise, Workout } from "@/lib/types";
import api from "@/lib/api";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar/Navbar";
import StatusCard from "@/components/StatsCard/StatsCard";
import WorkoutCard from "@/components/WorkoutCard/WorkoutCard";
import LinkCard from "@/components/LinkCard/page";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import {
  Container,
  Divider,
  FormGroup,
  FormSelect,
  LinkBtn,
  Section,
  SectionHeader,
  SectionTitle,
} from "@/styles/styles";
import { FaPlus } from "react-icons/fa";
import { CardsGrid, Hero, HeroGreeting, HeroName, StatsStrip } from "./styles";

export default function Workouts() {
  const [userName, setUserName] = useState<string>("User");
  const [userId, setUserId] = useState<number>(1);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("user-data");
    if (!savedData) return;
    const userData = JSON.parse(savedData);
    if (userData.id) setUserId(Number(userData.id));
    if (userData.name) setUserName(String(userData.name));
  }, []);

  const fetchWorkouts = async () => {
    try {
      const { data } = await api.get(`workout/user/${userId}`);
      setWorkouts(data);
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error(err);
    }
  };

  const fetchExercises = async () => {
    try {
      const { data } = await api.get(`exercise/user/${userId}`);
      setExercises(data);
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
    fetchExercises();
    localStorage.setItem("userId", String(userId));
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("userName", String(userName));
  }, [userName]);

  const deleteWorkout = async (id: number) => {
    try {
      await api.delete(`workout/delete/${id}`);
      Swal.fire({
        title: "Deletado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error(err);
    }
    fetchWorkouts();
  };

  const deleteExercise = async (id: number) => {
    try {
      await api.delete(`exercise/delete/${id}`);
      Swal.fire({
        title: "Deletado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error(err);
    }
    fetchExercises();
  };

  const handleAttach = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const wId = formData.get("workoutId")?.toString();
      const eId = formData.get("exerciseId")?.toString();
      try {
        await api.get(`workout/attach/${wId}/${eId}`);
        await fetchWorkouts();
        Swal.fire({
          title: "Vinculado com sucesso!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } catch (err) {
        Swal.fire({
          title: "Algo deu errado",
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.error(err);
      }
    },
    [fetchWorkouts],
  );

  return (
    <>
      <Navbar userName={userName} />

      <Container>
        <Hero>
          <HeroGreeting>Bem-vindo de volta</HeroGreeting>
          <HeroName>
            Olá, <span>{userName}!</span>
          </HeroName>
        </Hero>

        <StatsStrip>
          <StatusCard statusName="Treinos" statusValue={workouts.length} />
          <StatusCard statusName="Exercícios" statusValue={exercises.length} />
          <StatusCard
            statusName="Séries totais"
            statusValue={exercises.reduce(
              (acc, ex) => acc + (Number(ex.sets) || 0),
              0,
            )}
          />
        </StatsStrip>

        <Divider />

        <Section>
          <SectionHeader>
            <SectionTitle>Seus Treinos</SectionTitle>
            <LinkBtn href="/workouts/add">
              <FaPlus fontSize={14} />
              Novo Treino
            </LinkBtn>
          </SectionHeader>

          <CardsGrid>
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                id={workout.id}
                name={workout.name}
                date={workout.date}
                description={workout.description}
                exercises={workout.exercises}
                deleteWorkout={deleteWorkout}
              />
            ))}

            <LinkCard link="/workouts/add" text="Adicionar treino" isAdd />
          </CardsGrid>
        </Section>

        <Divider />

        <Section>
          <SectionHeader>
            <SectionTitle>Seus Exercícios</SectionTitle>
            <LinkBtn href="/exercises/add">
              <FaPlus fontSize={14} />
              Novo Exercício
            </LinkBtn>
          </SectionHeader>

          <CardsGrid>
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                id={exercise.id}
                name={exercise.name}
                sets={exercise.sets}
                reps={exercise.reps}
                deleteExercise={deleteExercise}
              />
            ))}

            <LinkCard link="/exercises/add" text="Adicionar exercício" isAdd />
          </CardsGrid>
        </Section>

        <Divider />

        <Section>
          <SectionHeader>
            <SectionTitle>Vincular Exercício</SectionTitle>
          </SectionHeader>

          <FormGroup onSubmit={handleAttach}>
            <FormSelect name="workoutId">
              {workouts.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name}
                </option>
              ))}
            </FormSelect>
            <FormSelect name="exerciseId">
              {exercises.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.name}
                </option>
              ))}
            </FormSelect>
            <button type="submit">Vincular →</button>
          </FormGroup>
        </Section>
      </Container>
    </>
  );
}
