#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format [type]', 'output format', 'stylish')
    .arguments('<filepath1> <filepath2>')
    .action((path1, path2) => {
        console.log(genDiff(path1, path2, program.opts().format));
});

program.parse();