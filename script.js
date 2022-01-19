//for index.html
function displayWord(e) {
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
  e.preventDefault();
  const lineNum = document.getElementById("tillWhichLine").value;
  const wordLength = parseInt(document.getElementById("wordLen").value);
  //   const hardLetters = document.getElementById("hardLetters");

  let punjVer = "";
  const letterIndex = ALL_LETTERS.indexOf(allLines[lineNum].charAt(4));
  const validLetters = ALL_LETTERS.substring(3, letterIndex + 1); //we dont was ooRa aaRa or eeRe

  for (let i = 0; i < wordLength; i++) {
    punjVer += validLetters.charAt(
      Math.floor(Math.random() * validLetters.length)
    );
  }
  document.getElementById("ans").innerHTML = punjVer;
}

//for learnDays.html
function showDayOfWeek(e) {
  const engToPunj = {
    Monday: "ਸੋਮਵਾਰ - Somvar",
    Tuesday: "ਮੰਗਲਵਾਰ - Mangalvar",
    Wednesday: "ਬੁੱਧਵਾਰ - Budhvar",
    Thursday: "ਵੀਰਵਾਰ - Veervar",
    Friday: "ਸ਼ੁੱਕਰਵਾਰ - Shukarvar",
    Saturday: "ਸ਼ਨੀਵਾਰ - Shanivar",
    Sunday: "ਐਤਵਾਰ - Attvar",
  };

  let engVer;
  let punjVer;
  if (e === "rand") {
    engVer = Object.keys(engToPunj)[Math.floor(Math.random() * 7)];
  } else {
    e.preventDefault();
    engVer = document.getElementById("dayOfWeek").value;
  }
  punjVer = engToPunj[engVer];
  const display = `<div>
  <button id="showHideBtnNum" onclick="showHideBtnWeek()">
    Show/Hide
  </button>
  <p>${engVer} :</p>
  <p hidden=true id="answerWeek">${punjVer}</p>
  </div>`;

  document.getElementById("ans").innerHTML = display;
}
function showHideBtnWeek() {
  const a = document.getElementById("answerWeek");
  a.hidden = !a.hidden;
}

//for learnNums.html
function showNum(e) {
  const engToPunj = {
    1: ["One", "੧", "Ikk", "ਇੱਕ"],
    2: ["Two", "੨", "Do", "ਦੋ"],
    3: ["Three", "੩", "Tin", "ਤਿੰਨ"],
    4: ["Four", "੪", "Char", "ਚਾਰ"],
    5: ["Five", "੫", "Panj", "ਪੰਜ"],
    6: ["Six", "੬", "Chee", "ਛੇ"],
    7: ["Seven", "੭", "Satt", "ਸੱਤ"],
    8: ["Eight", "੮", "Aath", "ਅੱਠ"],
    9: ["Nine", "੯", "No", "ਨੌ"],
    10: ["Ten", "੧੦", "Das", "ਦਸ"],
    11: ["Eleven", "੧੧", "Gayara", "ਗਿਆਰਾਂ"],
    12: ["Twelve", "੧੨", "Barha", "ਬਾਰਾਂ"],
    13: ["Thirteen", "੧੩", "Tera", "ਤੇਰਾਂ"],
    14: ["Fourteen", "੧੪", "Choda", "ਚੌਦਾਂ"],
    15: ["Fifteen", "੧੫", "Pandra", "ਪੰਦਰਾਂ"],
    16: ["Sixteen", "੧੬", "Sola", "ਸੋਲਾਂ"],
    17: ["Seventeen", "੧੭", "Satra", "ਸਤਾਰਾਂ"],
    18: ["Eighteen", "੧੮", "Aathra", "ਅਠਾਰਾਂ"],
    19: ["Nineteen", "੧੯", "Uni", "ਉੱਨੀ"],
    20: ["Twenty", "੨੦", "Vi", "ਵੀਹ"],
    21: ["Twenty-one", "੨੧", "Ikii", "ਇੱਕੀ"],
    22: ["Twenty-two", "੨੨", "Bai", "ਬਾਈ"],
    23: ["Twenty-three", "੨੩", "Tayi", "ਤੇਈ"],
    24: ["Twenty-four", "੨੪", "Chovi", "ਚੌਬੀ"],
    25: ["Twenty-five", "੨੫", "Pachee", "ਪੱਚੀ"],
    26: ["Twenty-six", "੨੬", "Chabii", "ਛੱਬੀ"],
    27: ["Twenty-seven", "੨੭", "Chatayi", "ਸਤਾਈ"],
    28: ["Twenty-eight", "੨੮", "Aathadyi ", "ਅਠਾਈ"],
    29: ["Twenty-nine", "੨੯", "Uniti", "ਉਨੱਤੀ"],
    30: ["Thirty", "੩੦", "Ti", "ਤੀਹ"],
    31: ["Thirty-one", "੩੧", "Ikati", "ਇਕੱਤੀ"],
    32: ["Thirty-two", "੩੨", "Bati", "ਬੱਤੀ"],
    33: ["Thirty-three", "੩੩", "Tenti", "ਤੇਤੀ"],
    34: ["Thirty-four", "੩੪", "Chonti", "ਚੌਂਤੀ"],
    35: ["Thirty-five", "੩੫", "Panit", "ਪੈਂਤੀ"],
    36: ["Thirty-six", "੩੬", "Chati ", "ਛੱਤੀ"],
    37: ["Thirty-seven", "੩੭", "Senti", "ਸੈਂਤੀ"],
    38: ["Thirty-eight", "੩੮", "Aatdi", "ਅਠੱਤੀ"],
    39: ["Thirty-nine", "੩੯", "Unitali", "ਉਨਤਾਲੀ"],
    40: ["Forty", "੪੦", "Chali", "ਚਾਲੀ"],
    41: ["Forty-one", "੪੧", "Iktali", "ਇਕਤਾਲੀ"],
    42: ["Forty-two", "੪੨", "Bayali", "ਬਿਆਲੀ"],
    43: ["Forty-three", "੪੩", "Tartali", "ਤਰਤਾਈ"],
    44: ["Forty-four", "੪੪", "Chowalli", "ਚੁਤਾਲੀ"],
    45: ["Forty-five", "੪੫", "Pantali", "ਪਨਤਾਲੀ"],
    46: ["Forty-six", "੪੬", "Chayali", "ਛਿਆਲੀ"],
    47: ["Forty-seven", "੪੭", "Santali", "ਸਨਤਾਲੀ"],
    48: ["Forty-eight", "੪੮", "Aatali", "ਅਠਤਾਲੀ"],
    49: ["Forty-nine", "੪੯", "Unija", "ਉਨੰਜਾ"],
    50: ["Fifty", "੫੦", "Panja", "ਪੰਜਾਹ"],
    51: ["Fifty-one", "੫੧", "Ikyavan", "ਇਕਵੰਜਾ"],
    52: ["Fifty-two", "੫੨", "Bawan", "ਬਵੰਜਾ"],
    53: ["Fifty-three", "੫੩", "Terepan", "ਤਰਵੰਜਾ"],
    54: ["Fifty-four", "੫੪", "Chovan", "ਚਰਵੰਜਾ"],
    55: ["Fifty-five", "੫੫", "Pachpan", "ਪਚਵੰਜਾ"],
    56: ["Fifty-six", "੫੬", "Shapan", "ਛਪੰਜਾ"],
    57: ["Fifty-seven", "੫੭", "Stavan", "ਸਤਵੰਜਾ"],
    58: ["Fifty-eight", "੫੮", "Aatdvan", "ਅਠਵੰਜਾ"],
    59: ["Fifty-nine", "੫੯", "Unijana", "ਉਨਾਹਠ"],
    60: ["Sixty", "੬੦", "Sath", "ਸੱਠ"],
    61: ["Sixty-one", "੬੧", "Ikath", "ਇਕਾਹਠ"],
    62: ["Sixty-two", "੬੨", "Bath", "ਬਾਹਠ"],
    63: ["Sixty-three", "੬੩", "Tereth", "ਤਰੇਂਹਠ"],
    64: ["Sixty-four", "੬੪", "Chovan", "ਚੌਂਹਠ"],
    65: ["Sixty-five", "੬੫", "Pansath", "ਪੈਂਹਠ"],
    66: ["Sixty-six", "੬੬", "Sayath", "ਛਿਆਹਠ"],
    67: ["Sixty-seven", "੬੭", "Satatt", "ਸਤਾਹਠ"],
    68: ["Sixty-eight", "੬੮", "Athaath", "ਅਠਾਹਠ"],
    69: ["Sixty-nine", "੬੯", "Untarh", "ਉਨੱਤਰ"],
    70: ["Seventy", "੭੦", "Satar", "ਸੱਤਰ"],
    71: ["Seventy-one", "੭੧", "Ikatar", "ਇਕਹੱਤਰ"],
    72: ["Seventy-two", "੭੨", "Bathar", "ਬਹੱਤਰ"],
    73: ["Seventy-three", "੭੩", "Tereth", "ਤਹੇਤਰ"],
    74: ["Seventy-four", "੭੪", "Chonth", "ਚਹੱਤਰ"],
    75: ["Seventy-five", "੭੫", "Pachtar", "ਪਚੱਤਰ"],
    76: ["Seventy-six", "੭੬", "Sihatar", "ਛਿਅੱਤਰ"],
    77: ["Seventy-seven", "੭੭", "Satatar", "ਸਤੱਤਰ"],
    78: ["Seventy-eight", "੭੮", "Athatar", "ਅਠੱਤਰ"],
    79: ["Seventy-nine", "੭੯", "Uniasiy", "ਉਨਾਸੀ"],
    80: ["Eighty", "੮੦", "Asi", "ਅੱਸੀ"],
    81: ["Eighty-one", "੮੧", "Ikisac", "ਇਕਆਸੀ"],
    82: ["Eighty-two", "੮੨", "Biac", "ਬਿਆਸੀ"],
    83: ["Eighty-three", "੮੩", "Tirac", "ਤਿਰਾਸੀ"],
    84: ["Eighty-four", "੮੪", "Choarc", "ਚੌਰਾਸੀ"],
    85: ["Eighty-five", "੮੫", "Pacahc", "ਪਚਾਸੀ"],
    86: ["Eighty-six", "੮੬", "Sehachi", "ਛਿਆਸੀ"],
    87: ["Eighty-seven", "੮੭", "Satachi", "ਸਤਾਸੀ"],
    88: ["Eighty-eight", "੮੮", "Atathc", "ਅਠਾਸੀ"],
    89: ["Eighty-nine", "੮੯", "Unanvey", "ਉਨੱਨਵੇਂ"],
    90: ["Ninety", "੯੦", "Nubey", "ਨੱਬੇ"],
    91: ["Ninety-one", "੯੧", "Ikanvey", "ਇਕੱਨਵੇ"],
    92: ["Ninety-two", "੯੨", "Banvey", "ਬੱਨਵੇ"],
    93: ["Ninety-three", "੯੩", "Tarnvey", "ਤਰੱਨਵੇ"],
    94: ["Ninety-four", "੯੪", "Chornvey", "ਚਰੱਨਵੇ"],
    95: ["Ninety-five", "੯੫", "Pachanvey", "ਪਚੱਨਵੇ"],
    96: ["Ninety-six", "੯੬", "Shayanvey", "ਛਿਅੱਨਵੇ"],
    97: ["Ninety-seven", "੯੭", "Satanvey", "ਸਤੱਨਵੇ"],
    98: ["Ninety-eight", "੯੮", "Athanvey", "ਅਠੱਨਵੇ"],
    99: ["Ninety-Nine", "੯੯", "Nadinvey", "ਨੜਿੱਨਵੇ"],
    100: ["Hundred", "੧੦੦", "So", "ਸੌ"],
  };

  let engVer;
  let punjVer;
  if (e === "rand") {
    engVer = Object.keys(engToPunj)[Math.floor(Math.random() * 100)];
  } else {
    e.preventDefault();
    engVer = document.getElementById("numInput").value;
    console.log(engVer);
  }
  punjVer = engToPunj[engVer];
  const display = `
  <div>
    <button id="showHideBtnNum" onclick="showHideBtnNum()">
      Show/Hide
    </button>
    <p>${engVer} :</p>
    <div hidden=true id="answerWeek">
      <div id='punjabiAns'>
        ${punjVer[3]}
      </div>
      <button id='showAll' onclick="showAll('${punjVer}')">
        show all
      </button>
    </div>
  </div>`;

  document.getElementById("ans").innerHTML = display;
}
function showHideBtnNum() {
  const a = document.getElementById("answerWeek");
  a.hidden = !a.hidden;
}
function showAll(ans) {
  console.log(ans);
  document.getElementById("punjabiAns").innerText = ans;
  document.getElementById("showAll").hidden = true;
}
function showAllNumbersTable() {
  const a = document.getElementById("allNumsTable");
  a.hidden = !a.hidden;
}
