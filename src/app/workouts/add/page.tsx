"use client";

import AppNavbar from "@/components/Navbar/Navbar";
import { useCallback } from "react";
import api from "@/lib/api";
import { toast } from "react-toastify";
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

export default function WorkoutAdd() {
  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const saved = localStorage.getItem("userId");
    if (!saved || saved === "0") {
      Swal.fire({
        title: "Erro",
        text: "Usuário inválido",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    const userId = Number(saved);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("title")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const date = formData.get("date")?.toString() ?? "";

    if (!name || !description || !date) {
      Swal.fire({
        title: "Preencha todos os campos",
        icon: "warning",
        confirmButtonText: "Cool",
      });
      return;
    }

    try {
      await api.post(`workout/create`, {
        name,
        description,
        date,
        userId,
      });

      toast("Adicionado", { type: "success" });
      Swal.fire({
        title: "Adicionado",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Cool",
      });
      console.error(err);
    }

    redirect("/workouts");
  }, []);

  return (
    <>
      <AppNavbar />
      <Container>
        <Row>
          <Col>
            <h1>Add Workout</h1>
          </Col>
        </Row>

        <Row>
          <form onSubmit={onSubmit}>
            <FormGroup>
              <FormLabel>Title</FormLabel>
              <FormInput
                name="title"
                type="text"
                placeholder="Enter a name to the workout"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Description</FormLabel>
              <FormInput
                name="description"
                type="text"
                placeholder="Enter a description to the workout"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Date</FormLabel>
              <FormInput name="date" type="date" placeholder="dd-mm-aaaa" />
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
