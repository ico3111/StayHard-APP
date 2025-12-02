import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, senha } = await request.json();

  // Validação simulada
  if (email !== "test@test.com" || senha !== "123") {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("token", "meu_jwt_aqui", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return res;
}
