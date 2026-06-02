"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import LinkCard from "@/components/LinkCard/page";
import { Exercise } from "@/lib/types";
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

export default function Exercises() {
  const [userName, setUserName] = useState("User");
  const [userId, setUserId] = useState<number>(1);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("user-data");

    if (!savedData) return;

    const userData = JSON.parse(savedData);

    if (userData.id) setUserId(Number(userData.id));
    if (userData.name) setUserName(String(userData.name));
  }, []);

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
    fetchExercises();
  }, [userId]);

  const deleteExercise = async (id: number) => {
    try {
      await api.delete(`exercise/delete/${id}`);

      Swal.fire({
        title: "Deletado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      });

      fetchExercises();
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
            <SectionTitle>Seus Exercícios</SectionTitle>

            <LinkBtn href="/exercises/add">
              <FaPlus fontSize={14} />
              Novo Exercício
            </LinkBtn>
          </SectionHeader>

          <Divider />

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
      </Container>
    </>
  );
}
