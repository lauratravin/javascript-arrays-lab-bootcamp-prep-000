const app = "I don't do much.";


var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(value){
  kittens.push(value);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(value){
  kittens.unshift(value);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten(value){
  kittens.pop(value);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten(value){
  kittens.shift(value);
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function apendKitten(value){
  var newkittens = [...kittens,value];
  return newkittens
}
