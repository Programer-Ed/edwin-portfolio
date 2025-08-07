// import { promises as fs } from "fs";
// import path from 'path';

// export const educationData = JSON.parse(
//   fs.readFileSync(path.join(process.cwd(), 'data/files/education.json'), 'utf-8')
// );
import path from "path";
import { promises as fs } from "fs";
export async function educationData() {
  const filePath = path.join(process.cwd(), "app/data/files/education.json");
  console.log('🔍 Loading JSON from:', filePath);
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}
