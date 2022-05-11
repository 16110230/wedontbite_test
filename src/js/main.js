// Task: Implement isNameInList function

var names = [
  'jax',
  'tryndamere',
  'anivia',
  'ahri'
];

function isNameInList (name) {
  // throw new Error('isNameInList function not implemented');
  if (name == "pikachu"){
   return "YES";
  } else {
    return "Not even close, Pikachu is the league of legends champion";
  }
}

console.log('Is Pikachu a league of legends champion? ', isNameInList('pikachu'));
