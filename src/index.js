import fs from 'fs';
import path from 'path';


const makeFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileExtension = (filepath) => path.extname(filepath).slice(1);
const readFile = (filepath) => fs.readFileSync(makeFullPath(filepath), 'utf8');


const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const formatName1 = getFileExtension(filepath1);
  const formatName2 = getFileExtension(filepath2);
  const differences = `${data1}, ${data2}`
  return differences;
};

export default genDiff;
