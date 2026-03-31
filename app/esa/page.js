// =========================================
// 📁 /app/esa/page.js — IL TUO AGENTE ESA
// =========================================
"use client";
import { useState } from "react";

export default function ESAAgent() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // chiamata API serverless su Vercel
    const res = await fetch("/api/esa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    const agentReply = {
      role: "agent",
      text: data.text
    };

    setMessages((prev) => [...prev, agentReply]);
    setInput("");
  };

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
      <h1>Agente ESA – Assistente Schemi Elettrici</h1>

      <div style={{ marginTop: 20 }}>
        <input
          style={{ width: "100%", padding: 10 }}
          placeholder="Inserisci una domanda tecnica..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={{ marginTop: 10 }} onClick={sendMessage}>
          Invia
        </button>
      </div>

      <div style={{ marginTop: 20, padding: 20, border: "1px solid #ccc" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: 10,
              color: m.role === "user" ? "blue" : "green"
            }}
          >
            <strong>{m.role === "user" ? "Tu:" : "ESA:"}</strong> {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}
