const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = fs.readFileSync(filepath1, 'utf8');
  const data2 = fs.readFileSync(filepath2, 'utf8');
  const differences = `${data1}, ${data2}`
  return differences;
};

export default genDiff;