// =========================================
// 📁 /app/api/esa/route.js — API serverless (collegata a GPT)
// 📁 /app/api/esa/route.js — API serverless (collegata a GPT)
// =========================================
import { NextResponse } from "next/server";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { message } = await req.json();
export async function POST(req) {
  const { message } = await req.json();
  // �� Recupera la chiave API dalle variabili d'ambiente di Vercel
  const apiKey = process.env.OPENAI_API_KEY;
  // �� Recupera la chiave API dalle variabili d'ambiente di Vercel
  const apiKey = process.env.OPENAI_API_KEY;
  // ❌ Se la chiave non esiste, avvisa l'utente
  if (!apiKey) {
    return NextResponse.json({ text: "❗ Errore: OPENAI_API_KEY non configurata su Vercel." });
  }
  // ❌ Se la chiave non esiste, avvisa l'utente
  if (!apiKey) {
    return NextResponse.json({ text: "❗ Errore: OPENAI_API_KEY non configurata su Vercel." });
  }
  // 🔗 Chiamata a GPT (modello GPT‑4o mini)
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Sei ESA, un assistente tecnico esperto in schemi elettrici, quadri, PLC, simboli e logiche di comando. Rispondi sempre in modo chiaro e professionale."
        },
        {
          role: "user",
          content: message
        }
      ]
    })
  });
   const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Sei ESA, un assistente tecnico esperto in schemi elettrici, quadri, PLC, simboli e logiche di comando. Rispondi sempre in modo chiaro e professionale."
        },
        {
          role: "user",
          content: message
        }
      ]
    })
  });
  co  // 🧠 Risposta del modello
  const reply = data  return NextResponse.json({ text: reply });
}
