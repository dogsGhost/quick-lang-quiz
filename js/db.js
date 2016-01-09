/* eslint quotes: [2, "double"] */

const db = {
  "pronoun": [
    { "en": "I", "es": "yo", "fr": "je" },
    { "en": "you (informal)", "es": "tu", "fr": "tu" },
    { "en": "you (formal)", "es": "usted", "fr": "vous" },
    { "en": "he", "es": "el", "fr": "il" },
    { "en": "she", "es": "ella", "fr": "elle" }
  ],

  "verb": [
    {
      "en": "am/are/is",
      "es": {
        "I": "soy",
        "you (formal)": "es",
        "you (informal)": "eres",
        "he": "es",
        "she": "es"
      }
    },
    {
      "en": "eat(s)",
      "es": {
        "I": "como",
        "you (formal)": "come",
        "you (informal)": "comes",
        "he": "come",
        "she": "come"
      }
    },
    {
      "en": "drink(s)",
      "es": {
        "I": "bebo",
        "you (formal)": "bebe",
        "you (informal)": "bebes",
        "he": "bebe",
        "she": "bebe"
      }
    }
  ],

  "determiner": [
    { "en": "a", "es": "un", "gender": 1 },
    { "en": "a", "es": "una", "gender": 0 },
    { "en": "the", "es": "el", "gender": 1 },
    { "en": "the", "es": "la", "gender": 0 }
  ],

  "noun": [
    { "en": "bread", "es": "pan", "gender": 1 },
    { "en": "water", "es": "agua", "gender": 1 },
    { "en": "milk", "es": "leche", "gender": 0 },
    { "en": "newspaper", "es": "diario", "gender": 1 },
    { "en": "apple", "es": "manzana", "gender": 0 },
    { "en": "boy", "es": "nino", "gender": 1 },
    { "en": "girl", "es": "nina", "gender": 0 },
    { "en": "man", "es": "hombre", "gender": 1 },
    { "en": "woman", "es": "mujer", "gender": 0 }
  ]
};

export default db;
