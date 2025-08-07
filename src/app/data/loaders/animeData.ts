// import anime from '../files/anime.json';

// export const animeData = anime;

// export const animeInfo = `
// Here is a list of anime titles and their descriptions:

// ${anime.map(a => `- ${a.title}: ${a.description}`).join('\n')}
// `;
import path from "path";
import { promises as fs } from "fs";
export async function animeData() {
  const filePath = path.join(process.cwd(), "app/data/files/anime.json");
  console.log('🔍 Loading JSON from:', filePath);
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}


// import anime from '../files/anime.json';

// export const animeInfo = `
// Here is a list of anime titles and their descriptions:

// ${anime.map(a => `- ${a.title}: ${a.description}`).join('\n')}
// `;