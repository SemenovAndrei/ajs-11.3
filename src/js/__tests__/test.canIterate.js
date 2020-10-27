import canIterate from '../canIterate';

const array = [];
const map = new Map();
const set = new Set();
const string = 'string';
const obg = {};
const number = 111;
const nulled = null;
const undefineded = undefined;
const boolTrue = true;
const boolFalse = false;

describe('checkItTrue', () => {
  test.each([
    array,
    map,
    set,
    string,
  ])('%p', (name) => {
    expect(canIterate(name)).toBe(true);
  });
});

describe('checkItFalse', () => {
  test.each([
    obg,
    number,
    nulled,
    undefineded,
    boolTrue,
    boolFalse,
  ])('%p', (name) => {
    expect(canIterate(name)).toBe(false);
  });
});
