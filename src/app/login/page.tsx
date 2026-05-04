"use client";

import { useCallback, useState } from "react";
import api from "@/lib/api"; // axios configurado
import { redirect } from "next/navigation";
import AppNavbar from "@/components/AppNavbar/AppNavbar";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./../page.module.css";
import Swal from "sweetalert2";

export default function LoginForm() {
  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    if (!email || !password) {
      Swal.fire({
        title: "Preencha todos os campos",
        icon: "warning",
        confirmButtonText: "Ok",
      });

      return;
    }

    try {
      let res = await api.post("/auth/login", { name: "", email, password });
      localStorage.setItem("user-data", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
      return;
    }

    redirect("/home");
  }, []);

  return (
    <>
      <AppNavbar />
      <main className={styles.container}>
        <Form onSubmit={onSubmit}>
          <Row className="mb-5">
            <Col md={12}>
              <h2>Login</h2>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button variant="success" type="submit">
                Entrar
              </Button>
            </Col>
          </Row>
        </Form>
      </main>
    </>
  );
}
