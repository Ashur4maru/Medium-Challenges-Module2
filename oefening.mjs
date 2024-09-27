import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let artiest = await userInput.question('Kies een artiest: \n 1. Red hot chili Peppers \n 2. AC/DC \n 3. Netsky \n 4. De Strangers \n \n Geef je keuze in: ');

/*
if (artiest == '1') {
  console.log('Je koos voor "Red hot chilli Peppers" \n Ze zijn de artist achter de hit: Give it away ');
} else if (artiest == '2') {
  console.log('Je koos voor "AC/DC" \n Ze zijn de artist achter de hit: Back in Black ');
} else if (artiest == '3') {
  console.log('Je koos voor "Netsky" \n Ze zijn de artist achter de hit: Gravity ');
} else if (artiest == '4') {
  console.log('Je koos voor "De Strangers" \n Ze zijn de artist achter de hit: Mijnen blauwe geschelpte');
} else {
  console.log('Foute keuze!!')
}
*/

switch (artiest) {
  case '1':
    console.log('Je koos voor "Red hot chilli Peppers" \n Ze zijn de artist achter de hit: Give it away ');
    break;
  case '2':
    console.log('Je koos voor "AC/DC" \n Ze zijn de artist achter de hit: Back in Black ');
    break;
  case '3':
    console.log('Je koos voor "Netsky" \n Ze zijn de artist achter de hit: Gravity ');
    break;
  case '4':
    console.log('Je koos voor "De Strangers" \n Ze zijn de artist achter de hit: Mijnen blauwe geschelpte ');
    break;
  default:
    console.log('Foute keuze!!')

}

process.exit();