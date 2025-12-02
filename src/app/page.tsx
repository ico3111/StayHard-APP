"use client";

import { useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import styles from "./page.module.css";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { Workout } from "@/lib/types";
import { workout, workout2, workout3 } from "@/lib/data";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <main className={styles.main}>
        <Row>
          <Col>
            <h1>Stay Hard APP</h1>
          </Col>
          <Col>
            <p>Keep your workouts and exercises organized here!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="info" href="/login">
              Login
            </Button>
          </Col>
        </Row>
      </main>
    </>
  );
}
