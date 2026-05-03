"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function doLogout() {
      try {
        await api.post("/user/logout");
      } catch (error) {
        console.error("Erro ao deslogar:", error);
      } finally {
        router.push("/login");
        router.refresh();
      }
    }

    doLogout();
  }, [router]);

  return <p>Saindo do StayHard...</p>;
}
