const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const response = await fetch("/api/getFinancialAdvice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalBudget, totalIncome, totalSpend }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch financial advice: ${response.statusText}`);
    }

    const data = await response.json();
    return data.advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error.message, error.stack);
    return "Unable to fetch financial advice at this time. Please try again later.";
  }
};

export default getFinancialAdvice;
