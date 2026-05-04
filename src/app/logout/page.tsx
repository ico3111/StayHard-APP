"use client";

import api from "@/lib/api";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const logout = () => {
  async function doLogout() {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("user-data");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    } finally {
      redirect("/login");
    }
  }

  useEffect(() => {
    doLogout();
  }, []);

  return <p>Fazendo logout...</p>;
};

export default logout;
