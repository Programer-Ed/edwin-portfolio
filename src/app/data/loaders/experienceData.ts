import fs from 'fs';
import path from 'path';

export const experienceData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'data/files/experience.json'), 'utf-8')
);
