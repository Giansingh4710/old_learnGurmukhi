const ALL_LETTERS = "ੳਅੲਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ";
const ALL_LETTERS_WITHOUT_HARD = "ੳਅੲਸਹਕਖਗਘਚਛਜਝਞਟਠਡਢਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ"; //no :ਙ,ਞ
//https://www.discoversikhism.com/punjabi/gurmukhi_random_letter_sequence_generator.html
const line1 = "ੳਅੲਸਹ";
const line2 = "ਕਖਗਘਙ";
const line3 = "ਚਛਜਝਞ";
const line4 = "ਟਠਡਢਣ";
const line5 = "ਤਥਦਧਨ";
const line6 = "ਪਫਬਭਮ";
const line7 = "ਯਰਲਵੜ";
const allLines = {
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  line7,
};
function displayWord(e) {
  e.preventDefault();
  const lineNum = document.getElementById("tillWhichLine").value;
  const wordLength = parseInt(document.getElementById("wordLen").value);
  //   const hardLetters = document.getElementById("hardLetters");

  let ansWord = "";
  const letterIndex = ALL_LETTERS.indexOf(allLines[lineNum].charAt(4));
  const validLetters = ALL_LETTERS.substring(3, letterIndex + 1); //we dont was ooRa aaRa or eeRe

  for (let i = 0; i < wordLength; i++) {
    ansWord += validLetters.charAt(
      Math.floor(Math.random() * validLetters.length)
    );
  }
  document.getElementById("ans").innerHTML = ansWord;
}
