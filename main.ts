// One Line, One Laugh — entry program (Node 22, no dependencies).
// Writes a single funny line to /output/entry.txt (or $MAKEFUN_OUTPUT
// when set, for local testing).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The joke: a robot vacuum that takes "part of the family" far too
// literally — the laugh lands on the last three words.
// Revision: tightened the setup ("it's family now" instead of "it's part
// of the family", dropped "so now") so the punch — "blames the dog" —
// arrives a beat sooner and the line reads in one breath.
const LINE =
  "I told my Roomba it's family now, so it leaves crumbs everywhere and blames the dog.";

const out = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(resolve(out)), { recursive: true });
writeFileSync(out, LINE, "utf8");
