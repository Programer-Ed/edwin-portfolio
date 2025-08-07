// export async function getToolData(prompt: string) {
//   const lower = prompt.toLowerCase();

//   if (lower.includes('anime')) {
//     const { animeData } = await import('./animeData');
//     return JSON.stringify(animeData, null, 2);
//   }

//   if (lower.includes('skills')) {
//     const { skillsData } = await import('./skillsData');
//     return JSON.stringify(skillsData, null, 2);
//   }

//   if (lower.includes('elevator')) {
//     const { elevatorData } = await import('./elevatorData');
//     return elevatorData;
//   }

//   if (lower.includes('education')) {
//     const { educationData } = await import('./educationData');
//     return JSON.stringify(educationData, null, 2);
//   }

//   if (lower.includes('experience')) {
//     const { experienceData } = await import('./experienceData');
//     return JSON.stringify(experienceData, null, 2);
//   }

//   return null;
// }

export async function getToolData(prompt: string) {
  const lower = prompt.toLowerCase();
  console.log("🕵️ Prompt received:", prompt);

  if (lower.includes('anime')) {
    console.log("📁 Matched: animeData");
    const { animeData } = await import('./animeData');
    return JSON.stringify(animeData, null, 2);
  }

  if (lower.includes('skills')) {
    console.log("📁 Matched: skillsData");
    const { skillsData } = await import('./skillsData');
    return JSON.stringify(skillsData, null, 2);
  }

  if (lower.includes('elevator')) {
    console.log("📁 Matched: elevatorData");
    const { elevatorData } = await import('./elevatorData');
    return elevatorData;
  }

  if (lower.includes('education')) {
    console.log("📁 Matched: educationData");
    const { educationData } = await import('./educationData');
    return JSON.stringify(educationData, null, 2);
  }

  if (lower.includes('experience')) {
    console.log("📁 Matched: experienceData");
    const { experienceData } = await import('./experienceData');
    return JSON.stringify(experienceData, null, 2);
  }

  console.log("❌ No match found, falling back to Gemini.");
  return null;
}
