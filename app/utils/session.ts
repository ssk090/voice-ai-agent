import { RealtimeSession } from "@openai/agents-realtime";
import { conversationalAgent } from "../agents/conversationalAgent";

let session: RealtimeSession | null = null;

export function getSession() {
  if (!session) {
    session = new RealtimeSession(conversationalAgent, {
      model: "gpt-realtime",
    });
  }
  return session;
}

export function closeSession() {
  if (session) {
    session.close();
    session = null;
  }
}
