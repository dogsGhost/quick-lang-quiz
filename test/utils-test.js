import expect from 'expect';
import utils from '../js/utils';

describe('utils.clean', () => {
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

describe('utils.capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(utils.capitalize('string')).toBe('String');
    // doesnt account for whitespace
    expect(utils.capitalize(' string')).toBe(' string');
  });
});
