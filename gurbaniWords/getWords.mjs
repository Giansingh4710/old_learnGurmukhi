import GurbaniWords from './data.mjs'

/*
   {
      "english" : "P. n.   Enemy",
      "gurmukhi" : "ਦੁਸ਼ਮਣ",
      "id" : "29491",
      "mahankosh" : "ਦੁਸ਼ਮਨ. ਦੇਖੋ, ਬੈਰੀ.",
      "roman" : "vairee",
      "word" : "ਵੈਰੀ"
   }
*/

const matras = ['ਾ', 'ਾਂ', 'ਿ', 'ੀ', 'ੁ', 'ੂ', 'ੇ', 'ੈ', 'ੋ', 'ੌ', 'ੰ']
matras.push('ਉ') 
matras.push('ਈ')
matras.push('ਆ')

const muktaWords = []

for (let i = 0; i < GurbaniWords.length; i++) {
  let mukta = true
  for (let j = 0; j < matras.length; j++) {
    if (GurbaniWords[i].word.includes(matras[j])){
      mukta = false
      break
    }
  }

  if (mukta) {
    muktaWords.push(GurbaniWords[i])
  }
}

console.log('Mukta words:', muktaWords.length)
for (let i = 0; i < muktaWords.length; i++) {
  // console.log(muktaWords[i].word, muktaWords[i].english)
  console.log(muktaWords[i].word, ',', muktaWords[i].english)
}
