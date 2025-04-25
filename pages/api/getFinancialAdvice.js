export default async function handler(req, res) {
 // console.log("API Route Hit: /api/getFinancialAdvice"); // Debugging log

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { totalBudget, totalIncome, totalSpend } = req.body;

  try {
    // console.log("Request Body:", { totalBudget, totalIncome, totalSpend }); // Debugging log

    const response = await fetch(process.env.GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        totalBudget,
        totalIncome,
        totalSpend,
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Gemini API Response:", data); // Debugging log
    res.status(200).json({ advice: data.advice });
  } catch (error) {
    console.error("Error in API Route:", error.message, error.stack);
    res.status(500).json({ error: "Unable to fetch financial advice at this time." });
  }
}
