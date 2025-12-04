"use client";

import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./../../page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { useCallback } from "react";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";

export default function WorkoutAdd() {
  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const saved = localStorage.getItem("userId");
    if (!saved || saved === "0") {
      toast("Usuário inválido", { type: "error" });
      return;
    }

    const userId = Number(saved);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("title")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const date = formData.get("date")?.toString() ?? "";

    if (!name || !description || !date) {
      toast("Preencha todos os campos", { type: "warning" });
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
    } catch (err) {
      toast("Algo deu errado", { type: "error" });
      console.error(err);
    }
  }, []);

  return (
    <>
      <AppNavbar />
      <main className={styles.main}>
        <Row>
          <Col>
            <h1>Add Workout</h1>
          </Col>
        </Row>

        <Row>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="workoutTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter a name to the workout"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="workoutDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter a description to the workout"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="workoutDate">
              <Form.Label>Date</Form.Label>
              <Form.Control name="date" type="text" placeholder="dd-mm-aaaa" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <ToastContainer></ToastContainer>
      </main>
    </>
  );
}
