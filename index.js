#!/usr/bin/env node

const { exec } = require("child_process");
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("You must execute this script with a search query!");
  return;
}
const query = encodeURIComponent(args.join("+").toString());

//TODO: Check the users platform to execute the command accordingly
exec(`explorer "https://www.youtube.com/results?search_query=${query}"`);
