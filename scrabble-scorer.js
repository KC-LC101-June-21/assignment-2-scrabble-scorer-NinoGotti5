const input = require("readline-sync");
let word = '';

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
//---------------------------------
function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  //for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }
    }
  
  return letterPoints;
}


//-------------------------------

function initialPrompt() {
  console.log("Let's play some Scrabble!");
  console.log("\n");
  let wordForScrubble = input.question("Enter a word to score: ");

return wordForScrubble;
}

//-------------------------

let numScore;

function simpleScore(word) {
  word = word.toUpperCase();

  /*for (let i = 0; i < word.length; i++) {
    numScore = word.length;
  }*/
  return word.length;

}

//--------------------
let vowelBonusScorer = 0;
function vowelBonusScore(word) {

  //let vowelBonusScore;
  let vowelFind = [];
  let consonantsFind = [];
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 'I', 'U'];
  let array = word.split("");
  let vowelScore = 0;
  let consScore = 0;

  for (let i = 0; i < array.length; i++) {
    if (vowels.includes(array[i])) {
      vowelFind.push(array[i]);
      vowelScore = vowelFind.length * 3;
    } else {
      consonantsFind.push(array[i]);
      consScore = consonantsFind.length;
    }
    vowelBonusScorer = vowelScore + consScore;
  } return vowelBonusScorer;
}


const newPointStructure = transform(oldPointStructure);

//=================


let simple = {
  name: "Simple Score",
  description: "One point per character",
  scoringFunction: simpleScore,
};
let vowelBonus = {
  name: "Vowel Bonus",
  description: "Vowels are worth 3 points",
  scoringFunction: vowelBonusScore
};
let scrubble = {
  name: "Scrubble",
  description: "Uses scrabble point system",
  scoringFunction: scrabbleScore
};


let scoringAlgorithms = [simple, vowelBonus, scrubble];

//==============
function scorerPrompt() {
  
  console.log("Which scoring algorithm would you like to use?")

  console.log(`0 -${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}`);
  console.log(`1 -${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}`);
  console.log(`2 -${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);

  let option = input.question("Enter 0, 1, or 2: ");
 
 
return scoringAlgorithms[option];
}

function transform(oldPointStructure) {

  let newPointStructure = {};

  for (let i = 0; i < oldPointStructure[1].length; i++) {
    //for (item in oldPointStructure){
    newPointStructure[`${oldPointStructure[1][i].toLowerCase()}`] = 1;
    // }
  }
  for (let i = 0; i < oldPointStructure[2].length; i++) {
    //for (item in object){
    newPointStructure[`${oldPointStructure[2][i].toLowerCase()}`] = 2;
  }


  for (let i = 0; i < oldPointStructure[3].length; i++) {
    //for (item in object){
    newPointStructure[`${oldPointStructure[3][i].toLowerCase()}`] = 3;
  }
  //  }
  for (let i = 0; i < oldPointStructure[4].length; i++) {
    //for (item in object){
    newPointStructure[`${oldPointStructure[4][i].toLowerCase()}`] = 4;
  }
  // }
  for (let i = 0; i < oldPointStructure[5].length; i++) {
    newPointStructure[`${oldPointStructure[5][i].toLowerCase()}`] = 5;
  }
  // }
  for (let i = 0; i < oldPointStructure[8].length; i++) {
    newPointStructure[`${oldPointStructure[8][i].toLowerCase()}`] = 8;
  }
  // }
  for (let i = 0; i < oldPointStructure[10].length; i++) {
    newPointStructure[`${oldPointStructure[10][i].toLowerCase()}`] = 10;
  }


  return newPointStructure;
}

//console.log(newPointStructure);

function scrabbleScore(word) {
  let points = 0;
  
  for (let letter of word) {
    points += newPointStructure[letter.toLowerCase()];
  }

  return points;
}

function runProgram() {
 let word1 = initialPrompt();
  let x = scorerPrompt();
  console.log(`Score for '${word1}': ${x.scoringFunction(word1)}`);
  
  /*if (x.scoringFunction==simpleScore){
          console.log(`Score for '${word1}': ${simpleScore(word1)}`);
 }
else if (x.scoringFunction==vowelBonusScore){
          console.log(`Score for '${word1}': ${vowelBonusScore(word1)}`);
 }
else if (x.scoringFunction==scrabbleScore){
          console.log(`Score for '${word1}': ${scrabbleScore(word1)}`);
 }
}}*/

}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};