// import fs from 'fs';
// import path from 'path';

// export const elevatorPitch = fs.readFileSync(
//   path.join(process.cwd(), 'data/files/elevator.txt'),
//   'utf8'
// );
import fs from 'fs';
import path from 'path';

export const elevatorData = fs.readFileSync(
  path.join(process.cwd(), 'data/files/elevator.txt'),
  'utf-8'
);
