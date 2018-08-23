// Code your solution in this file
function findMatching(array, string){
  return array.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  });
};
function fuzzyMatch(array, string){
  return array.filter(function (name){
    return name.slice(0,1) === string;
  });
}
