export const readFile = (filePath) => {
  return Deno.readTextFileSync(filePath);
};

export const fetchInput = (filePath, delim = "\n") => {
  const data = readFile(filePath);
  return data.split(delim);
};
