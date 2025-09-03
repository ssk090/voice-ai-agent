import { tool } from "@openai/agents/realtime";
import { z } from "zod";

export const getSearch = tool({
  name: "get_search",
  description: "Return search results for a query.",
  parameters: z.object({ query: z.string() }),
  async execute({ query }) {
    const raw = JSON.stringify({
      q: query,
    });

    const apiKey = process.env.NEXT_PUBLIC_SERPER_API_KEY;
    if (!apiKey) {
      throw new Error(
        "NEXT_PUBLIC_SERPER_API_KEY environment variable is not set."
      );
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: raw,
    };
    const url = `https://google.serper.dev/search`;
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    return result;
  },
});
