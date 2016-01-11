const utils = {
  // Remove whitespace/possible trailing period and make all letters lowercase.
  clean(string) {
    string = string.trim().toLowerCase();
    let lastChar = string.length - 1;
    return string.charAt(lastChar) === '.' ? string.slice(0, lastChar) : string;
  },

  // Capitalize first letter of a string.
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

export default utils;
