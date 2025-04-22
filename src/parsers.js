import yaml from 'js-yaml';

const parseData = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown extension: ${extension}`);
  }
};

export default parseData;