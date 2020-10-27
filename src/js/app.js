import canIterate from './canIterate';
import Team from './team';

const array = [];
const map = new Map();
const set = new Set();
const team = new Team();
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
  team,
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
