import expect from 'expect';
import utils from './../js/utils';

describe('utils', () => {
  describe('clean', () => {
    it('should trim whitespace', () => {
      expect(utils.clean('   string with whitespace    '))
        .toBe('string with whitespace');
      expect(utils.clean('string with whitespace'))
        .toBe('string with whitespace');
    });

    it('should make all characters lowercase', () => {
      expect(utils.clean('STRING')).toBe('string');
    });

    it('should remove a period at the end of a string', () => {
      // just a period to remove
      expect(utils.clean('string with period.')).toBe('string with period');
      // period & whitespace
      expect(utils.clean('  string with period.  ')).toBe('string with period');
      // if no period remove nothing
      expect(utils.clean('string with period')).toBe('string with period');
      // will only remove one period
      expect(utils.clean('string with period..')).toBe('string with period.');
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(utils.capitalize('string')).toBe('String');
      // doesnt account for whitespace
      expect(utils.capitalize(' string')).toBe(' string');
    });
  });

  describe('random', () => {
    it('should return a random integer', () => {
      let none = utils.random();
      none = (none === 0 || none === 1) ? true : false;

      let one = utils.random(2);
      one = (one === 0 || one === 1 || one === 2) ? true : false;

      let two = utils.random(3, 4);
      two = (two === 3 || two === 4) ? true : false;

      // No params should return 0 or 1.
      expect(none).toExist();
      // one param uses param as max and zero as min
      expect(one).toExist();
      // two params
      expect(two).toExist();
    });
  });

  describe('sample', () => {
    it('should return a random element from an array', () => {
      let i = utils.sample([1, 2]);
      i = (i === 1 || i === 2) ? true : false;

      expect(i).toExist();
    });
  });
});
