import expect from 'expect';
import getPhrases, {_p} from './../js/phrases';
import db from './../js/db';

describe('getPhrases', () => {
  it('should return an array with length the same as pass count prop', () => {
    expect(getPhrases({count: 5, src: db}).length).toBe(5);
  });

  it('should have array lenght of 10 if no count prop passed', () => {
    expect(getPhrases({src: db}).length).toBe(10);
  });
});

describe('_p', () => {
  describe('getWord', () => {
    let word = _p.getWord('pronoun', db);

    it('should return a word object', () => {
      expect(Object.keys(word)).toExist();
    });

    it('should contain en and es props', () => {
      expect(word.en).toExist();
      expect(word.es).toExist();
    });
  });

  describe('getDeterminer', () => {
    let src = {
      determiner: [
        { gender: 0 },
        { gender: 1 }
      ]
    };
    let det = _p.getDeterminer(0, src);
    let val = false;

    it('should return a determiner object or false', () => {
      if (det) {
        if (Object.keys(det).length) {
          val = true;
        }
      } else {
        val = true;
      }
      expect(val).toBe(true);
    });

    it('should have a gender property that matches the passed param', () => {
      det = _p.getDeterminer(0, src);
      let num = 1;
      if (det) {
        num = det.gender;
      }
      expect(num).toBe(0);
    });
  });

  describe('getPhrase', () => {
    let obj = _p.getPhrase(db);

    it('should return an object', () => {
      expect(Object.keys(obj).length).toExist();
    });

    it('should have a prop that is a string of 3 or 4 words', () => {
      let correctLen = (() => {
        obj = obj.english.split(' ').length;
        return (obj === 3 || obj === 4) ? true : false;
      })();

      expect(correctLen).toExist();
    });
  });
});
