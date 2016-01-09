import db from './db';
import { sample, filter, random } from 'lodash';

const phrases = [];
const getPhrase = (dict) => {
  // our phrase obj
  const phrase = {
    en_phrase: '',
    es_phrase: ''
    // words: []
  };

  // pick a pronoun
  let pronoun = sample(dict.pronoun);

  // Add to q obj
  phrase.en_phrase += `${pronoun.en} `;
  phrase.es_phrase += `${pronoun.es} `;
  // phrase.words.push(pronoun);

  // pick a verb
  let verb = sample(dict.verb);

  // Add to q obj
  phrase.en_phrase += `${verb.en} `;
  phrase.es_phrase += `${verb.es[pronoun.en]} `;
  // phrase.words.push(verb);

  // optional additional of determiner
  const getDeterminer = (gender) => {
    if (!random(2)) {
      return sample(filter(dict.determiner, (i) => gender === i.gender));
    }
    return false;
  };

  // pick a noun
  const pickNoun = () => {
    let noun = sample(dict.noun);
    let det = getDeterminer(noun.gender);

    if (det) {
      phrase.en_phrase += `${det.en} `;
      phrase.es_phrase += `${det.es} `;
      // phrase.words.push(det);
    }
    phrase.en_phrase += `${noun.en}`;
    phrase.es_phrase += `${noun.es}`;
    // phrase.words.push(noun);
  };

  pickNoun();

  return phrase;
};
let count = 10;

// get 10 phrases
while (count) {
  phrases.push(getPhrase(db));
  count--;
}

export default phrases;
