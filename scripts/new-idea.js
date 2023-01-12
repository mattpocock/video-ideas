const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ideasPath = path.resolve(__dirname, "../ideas");

const [, , newPath] = process.argv;

if (!newPath) {
  throw new Error("No path provided");
}

const absoluteNewPath = path.resolve(ideasPath, newPath);

fs.mkdirSync(absoluteNewPath);

execSync(`matt init --pnpm`, {
  cwd: absoluteNewPath,
});
execSync(`rm -rf .git`, {
  cwd: absoluteNewPath,
});
execSync(`code ${path.resolve(absoluteNewPath, "src", "index.ts")}`);
