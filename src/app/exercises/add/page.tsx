"use client";

import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./../../page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { useCallback } from "react";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

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
      await api.post(`exercise/create`, {
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
      <main className={styles.container}>
        <Row>
          <Col>
            <h1>Add Exercise</h1>
          </Col>
        </Row>

        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="exerciseName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter a name to the exercise"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="exerciseSets">
                <Form.Label>Sets</Form.Label>
                <Form.Control
                  name="sets"
                  type="number"
                  placeholder="Enter a number of sets to the exercise"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="exerciseReps">
                <Form.Label>Reps</Form.Label>
                <Form.Control
                  name="reps"
                  type="number"
                  placeholder="Enter a number of reps to the exercise"
                />
              </Form.Group>
            </Col>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Row>
        </Form>
      </main>
    </>
  );
}
