import { RealtimeAgent } from "@openai/agents-realtime";
import { getWeather, getSearch } from "../tools";
import { RIYA } from "../prompts/Riya";

export const conversationalAgent = new RealtimeAgent({
  name: "Conversational Agent",
  instructions: RIYA,
  voice: "shimmer",
  tools: [getWeather, getSearch],
});
