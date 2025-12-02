"use client";

import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import styles from "./../page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { Workout } from "@/lib/types";
import { workout, workout2, workout3 } from "@/lib/data";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import api from "@/lib/api";

export default function Workouts() {
  const [userName, setUserName] = useState<string>("Enrico");
  const [userId, setUserId] = useState<number>(4);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const { data } = await api.get(`workout/user/${userId}`);
        setWorkouts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWorkouts();
  }, [userId]);

  useEffect(() => {
    console.log(workouts);
  }, [workouts]);

  return (
    <>
      <AppNavbar />
      <main className={styles.main}>
        <Row>
          <Col>
            <h1>Hello, {userName}!</h1>
          </Col>
          <Col>
            <input
              type="number"
              placeholder="User ID teste"
              onChange={(e) => {
                setUserId(Number(e.currentTarget.value));
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
                <Card.Footer>
                  <Card.Link>Edit</Card.Link>
                  <Card.Link>Remove</Card.Link>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </Row>
        <hr />
        <Row></Row>
      </main>
    </>
  );
}
