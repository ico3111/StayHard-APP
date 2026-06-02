"use client";

import { useCallback } from "react";
import api from "@/lib/api"; // axios configurado
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar/Navbar";
import { Col, Container, FormInput, FormLabel, Row } from "@/styles/styles";
import Button from "@/components/Button/Button";

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
      <Navbar />
      <Container>
        <form onSubmit={onSubmit}>
          <Row className="mb-5">
            <Col md={12}>
              <h2>Login</h2>
            </Col>
          </Row>
          <br />
          <Row className="mb-2">
            <Col md={12}>
              <div className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <div className="mb-3">
                <FormLabel>Password</FormLabel>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={12}>
              <Button type="submit">Entrar</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
}
