import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const directory = dirname(fileURLToPath(import.meta.url));
const workerRoot = resolve(directory, "..");
const source = resolve(workerRoot, "..", "corpus", "review-corpus.json");
const target = resolve(workerRoot, "src", "corpus.generated.json");

await mkdir(dirname(target), { recursive: true });
await cp(source, target);
console.log(`Synced checked-in corpus to ${target}`);
