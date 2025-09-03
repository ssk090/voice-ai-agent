import { tool } from "@openai/agents/realtime";
import { z } from "zod";

export const getWeather = tool({
  name: "get_weather",
  description: "Return the weather for a city.",
  parameters: z.object({ city: z.string() }),
  async execute({ city }) {
    const url = `https://wttr.in/${city.toLowerCase()}?format=%C+%t`;
    const response = await fetch(url);
    const data = await response.text();
    return data;
  },
});
