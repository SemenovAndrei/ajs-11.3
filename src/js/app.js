import canIterate from './canIterate';

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

const checkIt = [
  array,
  map,
  set,
  string,
  obg,
  number,
  nulled,
  undefineded,
  boolTrue,
  boolFalse,
];

checkIt.forEach((e) => {
  console.log(canIterate(e));
});
