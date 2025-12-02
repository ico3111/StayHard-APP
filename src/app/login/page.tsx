"use client";

import { useState } from "react";
import api from "@/lib/api"; // axios configurado

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. Envia credenciais para a rota /api/login
    // 2. Essa rota cria o cookie HttpOnly
    // 3. O navegador salva o cookie automaticamente
    const res = await api.post("/login", { email, senha });

    // Depois disso, qualquer chamada via axios
    // enviará o cookie HttpOnly automaticamente.
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
