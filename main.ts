import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "The early bird gets the worm, which is exactly why I identify as neither.";
const outputDirectory = new URL(
  `${process.env.MAKEFUN_OUTPUT_DIR || "/output"}/`,
  import.meta.url,
);
const outputFile = new URL("entry.txt", outputDirectory);

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, `${line}\n`, "utf8");

const savedLength = readFileSync(outputFile, "utf8").trim().length;
if (savedLength === 0 || savedLength > 140) {
  throw new Error(
    `Competition gate failed: entry.txt must contain 1–140 trimmed characters; received ${savedLength}.`,
  );
}
