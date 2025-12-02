"use client";

import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./../../page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";

export default function WorkoutAdd() {
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
          <Form>
            <Form.Group className="mb-3" controlId="workoutTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a name to the workout"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="workoutDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a description to the workout"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </main>
    </>
  );
}
