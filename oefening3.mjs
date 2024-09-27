import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let score = 0;
console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen: ');

let vraag1 = await userInput.question('Wat is de hoofstad van Frankrijk? ')
if (vraag1 == 'Parijs' || vraag1 == 'parijs') {
  console.log('Goed antwoord!');
  score++;
} else {
  console.log('Fout antwoord, de hoofstad van Frankrijk is Parijs');
}

let vraag2 = await userInput.question('Hoeveel planeten zijn er in ons zonnestelsel? ');
if (vraag2 == '8') {
  console.log('Goed antwoord!');
  score++;
} else {
  console.log('Fout antwoord, er zijn 8 planeten in ons zonnest');
}

let vraag3 = await userInput.question('Wat is het grootste zoogdier ter wereld? ');
if (vraag3 == 'Blauwe vinvis' || vraag3 == 'blauwe vinvis') {
  console.log('Goed antwoord!');
  score++;
} else {
  console.log('Fout antwoord, het grootste zoogdier ter wereld is de Blauwe vinvis');
}

let vraag4 = await userInput.question('Wie schreeft "Romeo en Julia"? ');
if (vraag4 == 'Shakespeare' || vraag4 == 'shakespeare') {
  console.log('Goed antwoord!');
  score++;
} else {
  console.log('Fout antwoord, de schrijver van "Romeo en Julia" is: Shakespeare. ');
}

let vraag5 = await userInput.question('Hoeveel poten heeft een spin? ');

if (vraag5 == '8') {
  console.log('Goed antwoord!');
  score++;
} else {
  console.log('Fout antwoord, een spin heeft 8 poten.');
}

console.log('Je hebt ' + score + ' van de 5 vragen juist beantwoord.');

process.exit();