import axios from "axios";

export async function GET() {
  const response = await axios.post(
    "https://api.openai.com/v1/realtime/client_secrets",
    {
      session: {
        type: "realtime",
        model: "gpt-realtime",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return Response.json({ eKey: response.data.value });
}
