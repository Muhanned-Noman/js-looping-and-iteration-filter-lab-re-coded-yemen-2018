// Code your solution in this file
function findMatching(array, string){
  return array.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  });
};
