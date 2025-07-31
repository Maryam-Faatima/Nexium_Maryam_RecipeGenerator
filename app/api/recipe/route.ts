// app/api/recipe/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { ingredients } = await req.json();
  console.log("Received ingredients:", ingredients);

  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
  console.log("API Key exists?", !!OPENROUTER_API_KEY);

  if (!ingredients) {
    return NextResponse.json({ error: "No ingredients provided." }, { status: 400 });
  }

  if (!OPENROUTER_API_KEY) {
    return NextResponse.json({ error: "Missing OpenRouter API key." }, { status: 500 });
  }

  const prompt = `You're a creative chef. Create a detailed and fun recipe using the following ingredients: ${ingredients}. Include a title, ingredients list, and step-by-step instructions.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       model: "openai/gpt-3.5-turbo",
 // you can also try "openai/gpt-3.5-turbo"
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    console.log("OpenRouter response:", JSON.stringify(data, null, 2));

    const recipe = data.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ recipe: recipe || "No recipe found." });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json({ error: "Request failed." }, { status: 500 });
  }
}
