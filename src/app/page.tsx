"use client";

import Navbar from "@/components/Navbar/Navbar";
import { Col, Container, Divider, LinkBtn, Row } from "@/styles/styles";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <h1>Stay Hard APP</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Keep your workouts and exercises organized here!</p>
          </Col>
        </Row>
        <br />
        <Divider />
        <Row>
          <Col md={6}>
            <LinkBtn href="/login">
              <FaPlus fontSize={14} />
              Login
            </LinkBtn>
          </Col>
          <Col md={6}>
            <LinkBtn href="/register">
              <FaPlus fontSize={14} />
              Register
            </LinkBtn>
          </Col>
        </Row>
      </Container>
    </>
  );
}
