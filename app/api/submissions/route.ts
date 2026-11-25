import { NextRequest, NextResponse } from "next/server";

const allowedTypes = new Set(["prayer", "thanks", "contact", "decision"]);

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || !allowedTypes.has(body.type) || !body.name || !body.email || !body.consent) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  // Punto único de integración: conectar aquí Supabase cuando se entreguen las credenciales.
  // Durante el armado visual evitamos almacenar datos personales de forma provisoria.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Servicio pendiente de configuración" }, { status: 503 });
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}
