"use client";

import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welcome to Root Atlas. Ask me about primary texts, historical context, or the methodology used in this platform. (AI connection coming soon.)",
    },
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
        role: "assistant",
        content: "AI responses are not yet connected. This is a Phase 1 scaffold.",
      },
    ]);
    setInput("");
  }

  return (
    <div className="max-w-2xl flex flex-col h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">Ask</h1>
      <p className="text-stone-500 mb-6 text-sm">
        Ask questions about texts, history, and methodology.
      </p>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-stone-900 text-white"
                  : "bg-white border border-stone-200 text-stone-700"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 border-t border-stone-200 pt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about texts or history…"
          className="flex-1 px-4 py-2.5 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white placeholder:text-stone-400"
        />
        <button
          onClick={handleSend}
          className="px-5 py-2.5 text-sm font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
