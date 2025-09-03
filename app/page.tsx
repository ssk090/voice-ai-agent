"use client";

import { useState } from "react";
import axios from "axios";
import { getSession, closeSession } from "./utils/session";

export default function Home() {
  const [isTalking, setIsTalking] = useState(false);

  const handleStartAgent = async () => {
    setIsTalking(true);
    const response = await axios.get("/api/chat");
    const session = getSession();

    await session.connect({ apiKey: response.data.eKey });
  };

  const handleStopAgent = () => {
    setIsTalking(false);
    closeSession();
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8">
      <button
        onClick={handleStartAgent}
        className={`rounded-full bg-blue-600 text-white px-8 py-4 text-xl font-bold shadow-lg hover:bg-blue-700 transition`}
      >
        {isTalking ? "Agent Ready" : "Talk"}
      </button>
      <button onClick={handleStopAgent}>
        <span className="text-xl font-bold">{isTalking && "Stop"}</span>
      </button>
    </div>
  );
}
