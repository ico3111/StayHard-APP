"use client";

import AppNavbar from "@/components/Navbar/Navbar";
import { useCallback } from "react";
import api from "@/lib/api";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import {
  Col,
  Container,
  FormGroup,
  FormInput,
  FormLabel,
  Row,
} from "@/styles/styles";
import Button from "@/components/Button/Button";

export default function ExerciseAdd() {
  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const saved = localStorage.getItem("userId");

    if (!saved || saved === "0") {
      Swal.fire({
        title: "Erro",
        text: "Usuário inválido",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const userId = Number(saved);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString() ?? "";
    const sets = Number(formData.get("sets"));
    const reps = Number(formData.get("reps"));

    if (!name || !sets || !reps) {
      Swal.fire({
        title: "Preencha todos os campos",
        icon: "warning",
        confirmButtonText: "Cool",
      });
      return;
    }

    try {
      await api.post("exercise/create", {
        name,
        sets,
        reps,
        userId,
      });

      Swal.fire({
        title: "Adicionado",
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

    redirect("/exercises");
  }, []);

  return (
    <>
      <AppNavbar />

      <Container>
        <Row>
          <Col>
            <h1>Add Exercise</h1>
          </Col>
        </Row>

        <Row>
          <form onSubmit={onSubmit}>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput
                name="name"
                type="text"
                placeholder="Enter a name to the exercise"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Sets</FormLabel>
              <FormInput
                name="sets"
                type="number"
                placeholder="Enter a number of sets"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Reps</FormLabel>
              <FormInput
                name="reps"
                type="number"
                placeholder="Enter a number of reps"
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Row>
      </Container>
    </>
  );
}
