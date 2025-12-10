"use client";

import { useEffect, useState } from "react";
import { Card, ListGroup, Row, ToastContainer } from "react-bootstrap";
import styles from "./../page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { Exercise } from "@/lib/types";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import api from "@/lib/api";
import Swal from "sweetalert2";

export default function Exercises() {
  const [userId, setUserId] = useState<number>(1);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("userId");

    setUserId(Number(saved));
  }, []);

  const fetchExercises = async () => {
    try {
      const { data } = await api.get(`exercise/user/${userId}`);
      setExercises(data);
    } catch (err) {
      Swal.fire({
        title: "Algo deu errado",
        icon: "error",
        confirmButtonText: "Cool",
      });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExercises();
    localStorage.setItem("userId", String(userId));
  }, [userId]);

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

  return (
    <>
      <AppNavbar />
      <main className={styles.main}>
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
      </main>
    </>
  );
}
