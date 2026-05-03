"use client";

import { useState } from "react";
import api from "@/lib/api"; // axios configurado
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/user/login", { name: "", email, password });
    } catch (error) {
      console.log(error);
      return;
    }

    redirect("/home");
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
