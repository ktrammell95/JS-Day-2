// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.



// 1.
// Should always return the value 5

function giveMeFive() {
  return 5;
}

//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)

function noOp(name) {
  return (name);
}

//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.

function double(number) {
  return (number * 2);
}

//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.

function square(number) {
  return (number * number);
}

//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.

function sum (numbers) {
   var total = 0;
   for (var index = 0; index < numbers.length; index++) {
      total = total + numbers[index];
   }
   return total;
}

//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop

// alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


function letterIndex(letter) {
  var lowerCase, alphabet, index; 
  var alphabet = { //this is an object, set a key and value
    "a" : 0,
    "b" : 1,
    "c" : 2,
    "d" : 3,
    "e" : 4,
    "f" : 5,
    "g" : 6,
    "h" : 7,
    "i" : 8,
    "j" : 9,
    "k" : 10,
    "l" : 11,
    "m" : 12,
    "n" : 13,
    "o" : 14,
    "p" : 15,
    "q" : 16,
    "r" : 17,
    "s" : 18,
    "t" : 19,
    "u" : 20,
    "v" : 21,
    "w" : 22,
    "x" : 23,
    "y" : 24,
    "z" : 25,
  };

  lowerCase = letter.toLowerCase(); //this changes data entered in letter to lower case
  index = alphabet[lowerCase]; //this give the index a value that can be returned
  
  return index;
}



//---------

// 7.
// This function should accept 1 parameter; a number.
// It should return the letter that corresponds with
// that number. For example, 1 would be "a" and 26
// would be "z". This is the inverse of the previous
// function.

// Note: this needs to work for numbers larger than 26.
// For example 27 should loop back around to "a".

// HINT: use an array and the modulo (%) operator

function reverseLetterIndex(index) {
  var letter, alphabet = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
  "w", "x", "y", "z"];

  letter = alphabet[index % alphabet.length];
  //reassigns remainder to the index to allow loop

  return letter;
}

//---------

// 8.
// This function should accept 1 parameter; a string.
// It should shift every letter in the string by 13
// places. This is a form of Caesar cipher known as
// ROT-13. If you are unsure of exactly what you are
// supposed to do read the wikipedia article that explains
// it quite well: http://en.wikipedia.org/wiki/ROT13

// HINT: use the previous 2 functions

function rot13(sentence) {
  var cipheredCode;

  function codeLetter (letter) {
    var index = letterIndex(letter);  //this pulls letterIndex from #5 question
    var indexShifted = index + 13;
    var letterShifted = reverseLetterIndex(indexShifted); //this pulls reverseLetterIndex from #6
    return letterShifted;
  }

  function codeWord (word) {
    var letters = word.split(""); //this splits the letters of the word
    var combinedLetters = []; //this says that the letters are in an array
    var processedLetter, letter;
    
    for (var index = 0; index < letters.length; index ++) {
      letter = letters[index];
      processedLetter = codeLetter(letter); //this pulls in codeLetter from function above
      combinedLetters.push(processedLetter); //this takes the individual letters out of the array and turns into a script    
    }
    var processedWord = combinedLetters.join(""); //this joins the letters back together to create the word
    return processedWord;
  }

    var words = sentence.split(" "); // this splits each word at the space mark
    var word, cipheredWord, finishedWords = [];

    for (var index = 0; index < words.length; index ++) {
      word = words[index];
      cipheredWord = codeWord(word); //this pulls in the processed work from function above
      finishedWords.push(cipheredWord); // this takes the ciphered words out of the array and puts them into string
    }
    cipheredCode = finishedWords.join(" "); //this puts the string back in place with space marks


    return cipheredCode;
}
