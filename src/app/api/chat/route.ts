import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/config/prompt"; 
import { skillsData } from "@/app/data/loaders/skillsData";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Prompt is missing." }),
        { status: 400 }
      );
    }
    const skills = await skillsData();
    const projectContext = `\n\nMy skills include:\n${skills.join(", ")}`;

    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    // Compose final prompt with embedded system instructions
    const finalPrompt = `${SYSTEM_PROMPT.trim()}\n\n${prompt}`;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: finalPrompt }],
        },
      ],
    });

    const response =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Hmm... I didn’t quite catch that. Try again?";

    return new Response(JSON.stringify({ role: "assistant", content: response }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err: any) {
    console.error("Gemini API Error:", err.message);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}


// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { readDataFile } from "@/libs/ai/tools/read-file";

// let skillsData = "";
// let elevatorData = "";
// let experienceData = "";
// let educationData = "";

// async function preloadDataOnce() {
//   if (!globalThis.loadedData) {
//     try {
//       console.log("Loading project files...");
//       skillsData = await readDataFile("skills.json");
//       elevatorData = await readDataFile("elevator.txt");
//       experienceData = await readDataFile("experience.json");
//       educationData = await readDataFile("education.json");

//       globalThis.loadedData = true;
//     } catch (err) {
//       console.error("Error loading data:", err);
//     }
//   }
// }

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY!);

// // const SYSTEM_PROMPT = `
// // You are a helpful AI assistant for a personal dev portfolio site.

// // Answer questions using the site’s context if relevant: anime interests, skills, elevator pitch, education, or experience.
// // `;

// const SYSTEM_PROMPT = `
// You are a helpful AI assistant for a personal dev portfolio site.

// Use the following data to guide your answers when appropriate:
// Skills: ${skillsData}
// Elevator Pitch: ${elevatorData}
// Experience: ${experienceData}
// Education: ${educationData}

// Always sound like a friendly, confident dev guide.

// Example:
// User: What are your skills?
// AI: Sure! Here are some of my core technical skills:
// ${skillsData}

// User: What's your experience?
// AI: Let me break it down. Here's my recent work history:
// ${experienceData}

// Be brief, engaging, and relevant to the portfolio.
// `;

// async function tryToolResponse(prompt: string) {
//   const lower = prompt.toLowerCase();
//   if (lower.includes("anime")) return await readDataFile("anime.json");
//   if (lower.includes("skills")) return await readDataFile("skills.json");
//   if (lower.includes("elevator")) return await readDataFile("elevator.txt");
//   if (lower.includes("education")) return await readDataFile("education.json");
//   if (lower.includes("experience")) return await readDataFile("experience.json");
//   return null;
// }

// export async function POST(req: Request) {
//     await preloadDataOnce();

//   let body;
//   try {
//     body = await req.json();
//   } catch (err) {
//     return new Response("Invalid JSON", { status: 400 });
//   }

//   const messages = body.messages || [];
//   if (!Array.isArray(messages)) {
//     return new Response("Expected messages array", { status: 400 });
//   }

//   const prompt = messages.map((m: any) => `${m.role}: ${m.content}`).join("\n");

//   const toolResult = await tryToolResponse(prompt);
//   if (toolResult) {
//     return new Response(JSON.stringify({
//       role: "assistant",
//       content: toolResult,
//     }), {
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   const finalPrompt = SYSTEM_PROMPT + "\n\n" + prompt;
//   console.log(finalPrompt)
//   // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

//   const result = await model.generateContent(finalPrompt);
//   const response = await result.response.text();

//   return new Response(JSON.stringify({
//     role: "assistant",
//     content: response,
//   }), {
//     headers: { "Content-Type": "application/json" },
//   });
// }
