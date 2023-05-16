function show_ans_letters() {
  const ALL_LETTERS = 'ੳਅੲਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ'
  const ALL_LETTERS_WITHOUT_HARD = 'ੳਅੲਸਹਕਖਗਘਚਛਜਝਞਟਠਡਢਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ' //no :ਙ,ਞ
  //https://www.discoversikhism.com/punjabi/gurmukhi_random_letter_sequence_generator.html
  const line1 = 'ੳਅੲਸਹ'
  const line2 = 'ਕਖਗਘਙ'
  const line3 = 'ਚਛਜਝਞ'
  const line4 = 'ਟਠਡਢਣ'
  const line5 = 'ਤਥਦਧਨ'
  const line6 = 'ਪਫਬਭਮ'
  const line7 = 'ਯਰਲਵੜ'
  const allLines = {
    line1,
    line2,
    line3,
    line4,
    line5,
    line6,
    line7,
  }
  const lineNum = document.getElementById('tillWhichLine_letters').value
  const wordLength = parseInt(document.getElementById('wordLen').value)
  //   const hardLetters = document.getElementById("hardLetters");

  let punjVer = ''
  const letterIndex = ALL_LETTERS.indexOf(allLines[lineNum].charAt(4))
  const validLetters = ALL_LETTERS.substring(3, letterIndex + 1) //we dont was ooRa aaRa or eeRe

  for (let i = 0; i < wordLength; i++) {
    punjVer += validLetters.charAt(
      Math.floor(Math.random() * validLetters.length)
    )
  }
  document.getElementById('letters_ans').innerHTML = punjVer
}

function show_ans_week() {
  const engToPunj = {
    Monday: 'ਸੋਮਵਾਰ - Somvar',
    Tuesday: 'ਮੰਗਲਵਾਰ - Mangalvar',
    Wednesday: 'ਬੁੱਧਵਾਰ - Budhvar',
    Thursday: 'ਵੀਰਵਾਰ - Veervar',
    Friday: 'ਸ਼ੁੱਕਰਵਾਰ - Shukarvar',
    Saturday: 'ਸ਼ਨੀਵਾਰ - Shanivar',
    Sunday: 'ਐਤਵਾਰ - Attvar',
  }

  let engVer = document.getElementById('dayOfWeek').value
  if (engVer === 'Random') {
    engVer = Object.keys(engToPunj)[Math.floor(Math.random() * 7)]
  }
  const punjVer = engToPunj[engVer]
  document.getElementById(
    'day_of_week_ans'
  ).innerHTML = `${engVer} : ${punjVer}`
}

function show_ans_numbers(num) {
  const engToPunj = {
    1: ['One', '੧', 'Ikk', 'ਇੱਕ'],
    2: ['Two', '੨', 'Do', 'ਦੋ'],
    3: ['Three', '੩', 'Tin', 'ਤਿੰਨ'],
    4: ['Four', '੪', 'Char', 'ਚਾਰ'],
    5: ['Five', '੫', 'Panj', 'ਪੰਜ'],
    6: ['Six', '੬', 'Chee', 'ਛੇ'],
    7: ['Seven', '੭', 'Satt', 'ਸੱਤ'],
    8: ['Eight', '੮', 'Aath', 'ਅੱਠ'],
    9: ['Nine', '੯', 'No', 'ਨੌ'],
    10: ['Ten', '੧੦', 'Das', 'ਦਸ'],
    11: ['Eleven', '੧੧', 'Gayara', 'ਗਿਆਰਾਂ'],
    12: ['Twelve', '੧੨', 'Barha', 'ਬਾਰਾਂ'],
    13: ['Thirteen', '੧੩', 'Tera', 'ਤੇਰਾਂ'],
    14: ['Fourteen', '੧੪', 'Choda', 'ਚੌਦਾਂ'],
    15: ['Fifteen', '੧੫', 'Pandra', 'ਪੰਦਰਾਂ'],
    16: ['Sixteen', '੧੬', 'Sola', 'ਸੋਲਾਂ'],
    17: ['Seventeen', '੧੭', 'Satra', 'ਸਤਾਰਾਂ'],
    18: ['Eighteen', '੧੮', 'Aathra', 'ਅਠਾਰਾਂ'],
    19: ['Nineteen', '੧੯', 'Uni', 'ਉੱਨੀ'],
    20: ['Twenty', '੨੦', 'Vi', 'ਵੀਹ'],
    21: ['Twenty-one', '੨੧', 'Ikii', 'ਇੱਕੀ'],
    22: ['Twenty-two', '੨੨', 'Bai', 'ਬਾਈ'],
    23: ['Twenty-three', '੨੩', 'Tayi', 'ਤੇਈ'],
    24: ['Twenty-four', '੨੪', 'Chovi', 'ਚੌਬੀ'],
    25: ['Twenty-five', '੨੫', 'Pachee', 'ਪੱਚੀ'],
    26: ['Twenty-six', '੨੬', 'Chabii', 'ਛੱਬੀ'],
    27: ['Twenty-seven', '੨੭', 'Chatayi', 'ਸਤਾਈ'],
    28: ['Twenty-eight', '੨੮', 'Aathadyi ', 'ਅਠਾਈ'],
    29: ['Twenty-nine', '੨੯', 'Uniti', 'ਉਨੱਤੀ'],
    30: ['Thirty', '੩੦', 'Ti', 'ਤੀਹ'],
    31: ['Thirty-one', '੩੧', 'Ikati', 'ਇਕੱਤੀ'],
    32: ['Thirty-two', '੩੨', 'Bati', 'ਬੱਤੀ'],
    33: ['Thirty-three', '੩੩', 'Tenti', 'ਤੇਤੀ'],
    34: ['Thirty-four', '੩੪', 'Chonti', 'ਚੌਂਤੀ'],
    35: ['Thirty-five', '੩੫', 'Panit', 'ਪੈਂਤੀ'],
    36: ['Thirty-six', '੩੬', 'Chati ', 'ਛੱਤੀ'],
    37: ['Thirty-seven', '੩੭', 'Senti', 'ਸੈਂਤੀ'],
    38: ['Thirty-eight', '੩੮', 'Aatdi', 'ਅਠੱਤੀ'],
    39: ['Thirty-nine', '੩੯', 'Unitali', 'ਉਨਤਾਲੀ'],
    40: ['Forty', '੪੦', 'Chali', 'ਚਾਲੀ'],
    41: ['Forty-one', '੪੧', 'Iktali', 'ਇਕਤਾਲੀ'],
    42: ['Forty-two', '੪੨', 'Bayali', 'ਬਿਆਲੀ'],
    43: ['Forty-three', '੪੩', 'Tartali', 'ਤਰਤਾਈ'],
    44: ['Forty-four', '੪੪', 'Chowalli', 'ਚੁਤਾਲੀ'],
    45: ['Forty-five', '੪੫', 'Pantali', 'ਪਨਤਾਲੀ'],
    46: ['Forty-six', '੪੬', 'Chayali', 'ਛਿਆਲੀ'],
    47: ['Forty-seven', '੪੭', 'Santali', 'ਸਨਤਾਲੀ'],
    48: ['Forty-eight', '੪੮', 'Aatali', 'ਅਠਤਾਲੀ'],
    49: ['Forty-nine', '੪੯', 'Unija', 'ਉਨੰਜਾ'],
    50: ['Fifty', '੫੦', 'Panja', 'ਪੰਜਾਹ'],
    51: ['Fifty-one', '੫੧', 'Ikyavan', 'ਇਕਵੰਜਾ'],
    52: ['Fifty-two', '੫੨', 'Bawan', 'ਬਵੰਜਾ'],
    53: ['Fifty-three', '੫੩', 'Terepan', 'ਤਰਵੰਜਾ'],
    54: ['Fifty-four', '੫੪', 'Chovan', 'ਚਰਵੰਜਾ'],
    55: ['Fifty-five', '੫੫', 'Pachpan', 'ਪਚਵੰਜਾ'],
    56: ['Fifty-six', '੫੬', 'Shapan', 'ਛਪੰਜਾ'],
    57: ['Fifty-seven', '੫੭', 'Stavan', 'ਸਤਵੰਜਾ'],
    58: ['Fifty-eight', '੫੮', 'Aatdvan', 'ਅਠਵੰਜਾ'],
    59: ['Fifty-nine', '੫੯', 'Unijana', 'ਉਨਾਹਠ'],
    60: ['Sixty', '੬੦', 'Sath', 'ਸੱਠ'],
    61: ['Sixty-one', '੬੧', 'Ikath', 'ਇਕਾਹਠ'],
    62: ['Sixty-two', '੬੨', 'Bath', 'ਬਾਹਠ'],
    63: ['Sixty-three', '੬੩', 'Tereth', 'ਤਰੇਂਹਠ'],
    64: ['Sixty-four', '੬੪', 'Chovan', 'ਚੌਂਹਠ'],
    65: ['Sixty-five', '੬੫', 'Pansath', 'ਪੈਂਹਠ'],
    66: ['Sixty-six', '੬੬', 'Sayath', 'ਛਿਆਹਠ'],
    67: ['Sixty-seven', '੬੭', 'Satatt', 'ਸਤਾਹਠ'],
    68: ['Sixty-eight', '੬੮', 'Athaath', 'ਅਠਾਹਠ'],
    69: ['Sixty-nine', '੬੯', 'Untarh', 'ਉਨੱਤਰ'],
    70: ['Seventy', '੭੦', 'Satar', 'ਸੱਤਰ'],
    71: ['Seventy-one', '੭੧', 'Ikatar', 'ਇਕਹੱਤਰ'],
    72: ['Seventy-two', '੭੨', 'Bathar', 'ਬਹੱਤਰ'],
    73: ['Seventy-three', '੭੩', 'Tereth', 'ਤਹੇਤਰ'],
    74: ['Seventy-four', '੭੪', 'Chonth', 'ਚਹੱਤਰ'],
    75: ['Seventy-five', '੭੫', 'Pachtar', 'ਪਚੱਤਰ'],
    76: ['Seventy-six', '੭੬', 'Sihatar', 'ਛਿਅੱਤਰ'],
    77: ['Seventy-seven', '੭੭', 'Satatar', 'ਸਤੱਤਰ'],
    78: ['Seventy-eight', '੭੮', 'Athatar', 'ਅਠੱਤਰ'],
    79: ['Seventy-nine', '੭੯', 'Uniasiy', 'ਉਨਾਸੀ'],
    80: ['Eighty', '੮੦', 'Asi', 'ਅੱਸੀ'],
    81: ['Eighty-one', '੮੧', 'Ikisac', 'ਇਕਆਸੀ'],
    82: ['Eighty-two', '੮੨', 'Biac', 'ਬਿਆਸੀ'],
    83: ['Eighty-three', '੮੩', 'Tirac', 'ਤਿਰਾਸੀ'],
    84: ['Eighty-four', '੮੪', 'Choarc', 'ਚੌਰਾਸੀ'],
    85: ['Eighty-five', '੮੫', 'Pacahc', 'ਪਚਾਸੀ'],
    86: ['Eighty-six', '੮੬', 'Sehachi', 'ਛਿਆਸੀ'],
    87: ['Eighty-seven', '੮੭', 'Satachi', 'ਸਤਾਸੀ'],
    88: ['Eighty-eight', '੮੮', 'Atathc', 'ਅਠਾਸੀ'],
    89: ['Eighty-nine', '੮੯', 'Unanvey', 'ਉਨੱਨਵੇਂ'],
    90: ['Ninety', '੯੦', 'Nubey', 'ਨੱਬੇ'],
    91: ['Ninety-one', '੯੧', 'Ikanvey', 'ਇਕੱਨਵੇ'],
    92: ['Ninety-two', '੯੨', 'Banvey', 'ਬੱਨਵੇ'],
    93: ['Ninety-three', '੯੩', 'Tarnvey', 'ਤਰੱਨਵੇ'],
    94: ['Ninety-four', '੯੪', 'Chornvey', 'ਚਰੱਨਵੇ'],
    95: ['Ninety-five', '੯੫', 'Pachanvey', 'ਪਚੱਨਵੇ'],
    96: ['Ninety-six', '੯੬', 'Shayanvey', 'ਛਿਅੱਨਵੇ'],
    97: ['Ninety-seven', '੯੭', 'Satanvey', 'ਸਤੱਨਵੇ'],
    98: ['Ninety-eight', '੯੮', 'Athanvey', 'ਅਠੱਨਵੇ'],
    99: ['Ninety-Nine', '੯੯', 'Nadinvey', 'ਨੜਿੱਨਵੇ'],
    100: ['Hundred', '੧੦੦', 'So', 'ਸੌ'],
  }

  if (num === '') {
    document.getElementById('numbers_ans').innerHTML = ''
    return
  } else if (num === 'rand') {
    num = Object.keys(engToPunj)[Math.floor(Math.random() * 100)]
  }
  num = num.replace(/,/g, '')

  let punjVer = engToPunj[num]
  if (!(num in engToPunj)) {
    punjVer = num_pronunciation(num)
  }
  document.getElementById('numbers_ans').innerHTML = `
    <h4> 
      ${Number(num).toLocaleString('en-us')} : ${punjVer}
    </h4>
    ${Number(num).toLocaleString('en-IN')}
    `
}

const NUMS = {
  1: 'ਇੱਕ',
  2: 'ਦੋ',
  3: 'ਤਿੰਨ',
  4: 'ਚਾਰ',
  5: 'ਪੰਜ',
  6: 'ਛੇ',
  7: 'ਸੱਤ',
  8: 'ਅੱਠ',
  9: 'ਨੌ',
  10: 'ਦਸ',
  11: 'ਗਿਆਰਾਂ',
  12: 'ਬਾਰਾਂ',
  13: 'ਤੇਰਾਂ',
  14: 'ਚੌਦਾਂ',
  15: 'ਪੰਦਰਾਂ',
  16: 'ਸੋਲਾਂ',
  17: 'ਸਤਾਰਾਂ',
  18: 'ਅਠਾਰਾਂ',
  19: 'ਉੱਨੀ',
  20: 'ਵੀਹ',
  21: 'ਇੱਕੀ',
  22: 'ਬਾਈ',
  23: 'ਤੇਈ',
  24: 'ਚੌਬੀ',
  25: 'ਪੱਚੀ',
  26: 'ਛੱਬੀ',
  27: 'ਸਤਾਈ',
  28: 'ਅਠਾਈ',
  29: 'ਉਨੱਤੀ',
  30: 'ਤੀਹ',
  31: 'ਇਕੱਤੀ',
  32: 'ਬੱਤੀ',
  33: 'ਤੇਤੀ',
  34: 'ਚੌਂਤੀ',
  35: 'ਪੈਂਤੀ',
  36: 'ਛੱਤੀ',
  37: 'ਸੈਂਤੀ',
  38: 'ਅਠੱਤੀ',
  39: 'ਉਨਤਾਲੀ',
  40: 'ਚਾਲੀ',
  41: 'ਇਕਤਾਲੀ',
  42: 'ਬਿਆਲੀ',
  43: 'ਤਰਤਾਈ',
  44: 'ਚੁਤਾਲੀ',
  45: 'ਪਨਤਾਲੀ',
  46: 'ਛਿਆਲੀ',
  47: 'ਸਨਤਾਲੀ',
  48: 'ਅਠਤਾਲੀ',
  49: 'ਉਨੰਜਾ',
  50: 'ਪੰਜਾਹ',
  51: 'ਇਕਵੰਜਾ',
  52: 'ਬਵੰਜਾ',
  53: 'ਤਰਵੰਜਾ',
  54: 'ਚਰਵੰਜਾ',
  55: 'ਪਚਵੰਜਾ',
  56: 'ਛਪੰਜਾ',
  57: 'ਸਤਵੰਜਾ',
  58: 'ਅਠਵੰਜਾ',
  59: 'ਉਨਾਹਠ',
  60: 'ਸੱਠ',
  61: 'ਇਕਾਹਠ',
  62: 'ਬਾਹਠ',
  63: 'ਤਰੇਂਹਠ',
  64: 'ਚੌਂਹਠ',
  65: 'ਪੈਂਹਠ',
  66: 'ਛਿਆਹਠ',
  67: 'ਸਤਾਹਠ',
  68: 'ਅਠਾਹਠ',
  69: 'ਉਨੱਤਰ',
  70: 'ਸੱਤਰ',
  71: 'ਇਕਹੱਤਰ',
  72: 'ਬਹੱਤਰ',
  73: 'ਤਹੇਤਰ',
  74: 'ਚਹੱਤਰ',
  75: 'ਪਚੱਤਰ',
  76: 'ਛਿਅੱਤਰ',
  77: 'ਸਤੱਤਰ',
  78: 'ਅਠੱਤਰ',
  79: 'ਉਨਾਸੀ',
  80: 'ਅੱਸੀ',
  81: 'ਇਕਆਸੀ',
  82: 'ਬਿਆਸੀ',
  83: 'ਤਿਰਾਸੀ',
  84: 'ਚੌਰਾਸੀ',
  85: 'ਪਚਾਸੀ',
  86: 'ਛਿਆਸੀ',
  87: 'ਸਤਾਸੀ',
  88: 'ਅਠਾਸੀ',
  89: 'ਉਨੱਨਵੇਂ',
  90: 'ਨੱਬੇ',
  91: 'ਇਕੱਨਵੇ',
  92: 'ਬੱਨਵੇ',
  93: 'ਤਰੱਨਵੇ',
  94: 'ਚਰੱਨਵੇ',
  95: 'ਪਚੱਨਵੇ',
  96: 'ਛਿਅੱਨਵੇ',
  97: 'ਸਤੱਨਵੇ',
  98: 'ਅਠੱਨਵੇ',
  99: 'ਨੜਿੱਨਵੇ',
  100: 'ਸੌ',
  1_000: 'ਹਜ਼ਾਰ',
  100_000: 'ਲੱਖ',
  10_000_000: 'ਕਰੋੜ',
  1_000_000_000: 'ਅਰਬ', // 1 billion
  // 1_000_000_000_000: 'ਖਰਬ', // 1 trillion
  // 1_000_000_000_000_000: 'ਨੀਲ', // 1 quadrillion
}

function num_pronunciation(num) {
  num = num.replace(/^0+/, '') // remove leading zeros
  let pun_num = ''
  if (num in NUMS) {
    pun_num = NUMS[num]
  } else if (num.length === 3) {
    pun_num = NUMS[num[0]] + ' ' + NUMS['100'] + ' ' + num_pronunciation(num.substring(1))
  } else if (num.length < 12) {
    const odd_len = num.length % 2 === 1
    let prefix;
    let suffix;
    const chunk = '1' + '0'.repeat(odd_len ? num.length - 2 : num.length - 1)
    const middle = NUMS[chunk]
    if (odd_len) {
      prefix = NUMS[num.substring(0, 2)]
      suffix = num_pronunciation(num.substring(2))
    }else{
      prefix = NUMS[num[0]]
      suffix = num_pronunciation(num.substring(1))
    }
    pun_num = prefix + ' ' + middle + ' ' + suffix
  }
  // NUMS[num] = pun_num
  return pun_num
}

function showAllNumbersTable() {
  const a = document.getElementById('allNumsTable')
  a.hidden = !a.hidden
}
