/* import the functions from index.js */
import { generateUniqueID, addAccount } from './index.js';

/* test generate unique id */
console.log(generateUniqueID("Alan", "Turing"));

/* test add account */
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Will", "Peligro", "wspeligro@w3c.com", 19]));
