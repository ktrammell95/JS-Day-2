//need to compare both arrays and pull out the matching letters and print them to console

var alphabet = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
  "w", "x", "y", "z"];
var vowels = ["a", "e", "i", "o", "u"];

function getMatch(a, b) {
  var matches = [];
  

  for (aIndex = 0; aIndex < alphabet.length; aIndex++) {
      for (vIndex = 0; vIndex < vowels.length; vIndex++) {
        if (alphabet[aIndex] === vowels[vIndex]) matches.push ( alphabet[aIndex]);
      }
    }
    return matches;
}

getMatch(alphabet, vowels);

//need code to loop through both arrays and return a vowel if the letter is a vowel.

function getVowels(letter) {
  
  for (vIndex = 0; vIndex < vowels.length; vIndex++) {
      if (letter == vowels[vIndex]) {
        return ("vowel");
        } 
  }
  return "consonant";
}

//need to print out full alphabet

  
for (aIndex = 0; aIndex < alphabet.length; aIndex++) {
    console.log (alphabet[aIndex]);

}
    