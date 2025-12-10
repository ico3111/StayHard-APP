"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  Row,
  ToastContainer,
} from "react-bootstrap";
import styles from "./../page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { Exercise, Workout } from "@/lib/types";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import api from "@/lib/api";
import Swal from "sweetalert2";

export default function Workouts() {
  const [userName, setUserName] = useState<string>("User");
  const [userId, setUserId] = useState<number>(1);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // PEGA DADOS DO LOCAL STORAGE DO USUARIO (PROVISORIO)
  useEffect(() => {
    const savedId = localStorage.getItem("userId");
    const savedName = localStorage.getItem("userName");
    savedId ? setUserId(Number(savedId)) : 1;
    savedName ? setUserName(String(savedName)) : "";
  }, []);

  // PEGA DADOS DOS TREINOS
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

  // PEGA DADOS DOS EXERCICIOS
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

  // ATUALIZA TREINOS E GUARDA DADO QUENDO ID USER ALTERA
  useEffect(() => {
    fetchWorkouts();
    fetchExercises();
    localStorage.setItem("userId", String(userId));
  }, [userId]);

  // GUARDA NOME ADICIONADO PELO USUARIO NO LS
  useEffect(() => {
    localStorage.setItem("userName", String(userName));
  }, [userName]);

  // DELETA TREINO AO CLICAR NO LINK
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

  // DELETA EXERCICIO AO CLICAR NO LINK
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

  // ATTACH EXERCISE
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const wId = formData.get("workoutId")?.toString();
      const eId = formData.get("exerciseId")?.toString();

      try {
        await api.get(`workout/attach/${wId}/${eId}`);

        await fetchWorkouts();

        Swal.fire({
          title: "Unificado com sucesso!",
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
    [fetchWorkouts]
  );

  return (
    <>
      <AppNavbar />
      <main className={styles.main}>
        <Row>
          <Col md={8}>
            <h1>Hello, {userName}!</h1>
          </Col>
          <Col md={2}>
            <input
              type="number"
              placeholder="User ID teste"
              onChange={(e) => {
                setUserId(Number(e.currentTarget.value));
              }}
            />
          </Col>
          <Col md={2}>
            <input
              type="text"
              placeholder="User nome teste"
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <h3>Your Workouts</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Card
              style={{
                width: "20rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 0",
              }}
            >
              <Link href="/workouts/add">
                <FaPlus style={{ fontSize: "5rem" }} />
              </Link>
            </Card>

            {workouts?.map((workout, index) => (
              <Card key={index} style={{ width: "20rem" }}>
                <Card.Header>
                  <Card.Title>{workout?.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {workout?.date}
                  </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{workout?.description}</Card.Text>

                  <ListGroup>
                    {workout?.exercises.map((exercise, index) => (
                      <ListGroup.Item key={index}>
                        <b>{exercise?.name}</b> | {exercise?.sets} -{" "}
                        {exercise?.reps}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
                <Card.Footer
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <b>Id: </b>
                    {workout?.id}
                  </div>
                  <Card.Link
                    onClick={() => {
                      deleteWorkout(workout?.id);
                    }}
                  >
                    Remove
                  </Card.Link>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </Row>
        <hr />
        <Row>
          <h3>Your Exercises</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Card
              style={{
                width: "20rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 0",
              }}
            >
              <Link href="/exercises/add">
                <FaPlus style={{ fontSize: "5rem" }} />
              </Link>
            </Card>

            {exercises?.map((exercise, index) => (
              <Card key={index} style={{ width: "20rem" }}>
                <Card.Header>
                  <Card.Title>{exercise?.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <b>Sets: </b>
                      {exercise?.sets}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Reps: </b>
                      {exercise?.reps}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <b>Id: </b>
                    {exercise?.id}
                  </div>
                  <Card.Link
                    onClick={() => {
                      deleteExercise(exercise?.id);
                    }}
                  >
                    Remove
                  </Card.Link>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </Row>
        <hr />
        <Row>
          <h3>Attach Exercise</h3>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                maxWidth: "300px",
                flexDirection: "column",
                border: "1px solid gray",
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              <Form.Select name="workoutId">
                {workouts.map((workout) => (
                  <option key={workout.id} value={workout.id}>
                    {workout.name}
                  </option>
                ))}
              </Form.Select>
              <Form.Select name="exerciseId">
                {exercises.map((exercise) => (
                  <option key={exercise.id} value={exercise.id}>
                    {exercise.name}
                  </option>
                ))}
              </Form.Select>

              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Row>
      </main>
    </>
  );
}
