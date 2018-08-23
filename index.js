// Code your solution in this file
function findMatching(array, string){
  return array.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  });
};
function fuzzyMatch(array, string){
  let lengthOfLetters = string.length;
  return array.filter(function (name){
    return name.slice(0,lengthOfLetters) === string;
  });
};
function matchName(array, string){
  return array.filter(function(Obj){
    return Obj.name.toLowerCase() === string.toLowerCase();
  });
};
