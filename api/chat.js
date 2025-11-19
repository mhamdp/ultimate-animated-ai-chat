export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  const userMsg = req.body.message || "";

  // AI reply (simple for now)
  const reply =
    "AI Response → " +
    userMsg.split("").reverse().join("");

  res.status(200).json({ reply });
}
