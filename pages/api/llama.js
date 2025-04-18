import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct";
  const API_KEY = process.env.HF_API_KEY; // Store API key in .env file

  try {
    const response = await axios.post(
      API_URL,
      { inputs: req.body.prompt },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching response" });
  }
}
