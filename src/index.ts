import add from './testImport';
import * as dotenv from 'dotenv-safe';

dotenv.config();
console.log(process.env.MY_NAME);
const answer = add(10, 4);
console.log(answer);
