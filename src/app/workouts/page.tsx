"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import WorkoutCard from "@/components/WorkoutCard/WorkoutCard";
import LinkCard from "@/components/LinkCard/page";
import { Workout } from "@/lib/types";
import api from "@/lib/api";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";
import {
  Container,
  Divider,
  LinkBtn,
  Section,
  SectionHeader,
  SectionTitle,
} from "@/styles/styles";
import { CardsGrid } from "./../home/styles";

export default function Workouts() {
  const [userName, setUserName] = useState("User");
  const [userId, setUserId] = useState<number>(1);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

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

  useEffect(() => {
    fetchWorkouts();
  }, [userId]);

  const deleteWorkout = async (id: number) => {
    try {
      await api.delete(`workout/delete/${id}`);

      Swal.fire({
        title: "Deletado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });

      fetchWorkouts();
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Ok",
      });

      console.error(err);
    }
  };

  return (
    <>
      <Navbar userName={userName} />

      <Container>
        <Section>
          <SectionHeader>
            <SectionTitle>Seus Treinos</SectionTitle>

            <LinkBtn href="/workouts/add">
              <FaPlus fontSize={14} />
              Novo Treino
            </LinkBtn>
          </SectionHeader>

          <Divider />

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
      </Container>
    </>
  );
}
