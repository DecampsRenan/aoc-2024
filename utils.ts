import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

export const getInput = async (pathname: string) => {
  const filepath = path.resolve(process.cwd(), pathname);
  const fileStream = fs.createReadStream(filepath);
  return readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
};
