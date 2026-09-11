import {readFile} from 'node:fs/promises';
import {validateDeck} from '../packages/brands/src/deck-validation.mjs';
if(!process.argv[2])throw new Error('Usage: node scripts/validate-deck.mjs deck.json');
const result=validateDeck(JSON.parse(await readFile(process.argv[2],'utf8')));console.log(JSON.stringify(result,null,2));if(!result.valid)process.exitCode=1;
