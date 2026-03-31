import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY non trovata" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      received: message,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Errore nel parsing della richiesta", details: String(err) },
      { status: 400 }
    );
  }
}
``
