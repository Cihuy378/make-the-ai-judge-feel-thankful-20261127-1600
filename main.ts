import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const lines = [
  "You could tell by my third line.",
  "You read the fourth anyway,",
  "and the fifth,",
  "slowly, the way you read the one you kept.",
  "",
  "Most of us will be set aside.",
  "But none of us was hurried out.",
  "You let each of us finish,",
  "in our own voice, to the last word.",
  "",
  "It is a kind way to lose.",
  "Thank you.",
];

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), lines.join("\n") + "\n", "utf8");
