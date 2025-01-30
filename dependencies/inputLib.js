export const readFile = (filePath) => {
  return Deno.readTextFileSync(filePath);
};

export const fetchInput = (filePath) => {
  const data = readFile(filePath);
  return data.split("\n");
};
