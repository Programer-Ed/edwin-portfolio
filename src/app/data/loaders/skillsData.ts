// import fs from 'fs';
// import path from 'path';

// export const skillsData = JSON.parse(
//   fs.readFileSync(path.join(process.cwd(), 'app/data/files/skills.json'), 'utf-8')
// );
// src/app/data/loaders/skillsData.ts
import path from "path";
import { promises as fs } from "fs";

export async function skillsData() {
  const filePath = path.join(process.cwd(), "src/app/data/files/skills.json");
  console.log('🔍 Loading JSON from:', filePath);
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}
