// =========================================
// 📁 /app/api/esa/route.js — API serverless
// =========================================
import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  // Risposta semplice
  const reply = `Analisi tecnica automatica: ${message}`;

  return NextResponse.json({ text: reply });
}
