import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let berekeningSymbool = await userInput.question('Welke berekening wil je doen: +, -, * of /. ');
console.log(berekeningSymbool);

let getal1 = parseFloat(await userInput.question('Geef je eerste getal in: '));
let getal2 = parseFloat(await userInput.question('Geef je tweede getal in: '));

switch (berekeningSymbool) {
  case '+':
    console.log(getal1 + ' + ' + getal2);
    console.log(getal1 + getal2);
    break;
  case '-':
    console.log(getal1 + ' - ' + getal2);
    console.log(getal1 - getal2);
    break;
  case '*':
    console.log(getal1 + ' * ' + getal2);
    console.log(getal1 * getal2);
    break;
  case '/':
    if (getal1 == 0 || getal2 == 0) {
      console.log('Je kan niet delen door 0');
    } else {
      console.log(getal1 + ' / ' + getal2);
      console.log(getal1 / getal2);
      break;
    }

  default:

}


process.exit();
