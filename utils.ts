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

export const mapFileLines = async <T>(
  pathname: string,
  mapper: (line: string, lineNumber: number) => T,
) => {
  const reader = await getInput(pathname);
  let lineCounter = 0;
  for await (const line of reader) {
    mapper(line, lineCounter);
    lineCounter++;
  }
};
