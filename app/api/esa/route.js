import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Legge il body JSON
    const { message } = await req.json();

    // Recupera API key da variabile d'ambiente
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY non trovata" },
        { status: 500 }
      );
    }

    // --- LOGICA API (qui aggiungi il tuo codice) ---
    // Esempio:
    // const result = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${apiKey}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-4o-mini",
    //     messages: [{ role: "user", content: message }],
    //   }),
    // });
    //
    // const data = await result.json();

    // Risposta base
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
