#!/usr/bin/env node
const program = require('commander');
const Swagger2ToPostman = require('./swagger2-to-postman');
const fs = require('fs');

const convert = (input) => {
  fs.readFile(input, 'utf8', (err, text) => {
    let result = new Swagger2ToPostman().convert(JSON.parse(text));
    console.log(JSON.stringify(result.collection));
  });
}

program
  .option('-i, --input <input_file>', 'swagger.json')
  .parse(process.argv);

convert(program.input);
