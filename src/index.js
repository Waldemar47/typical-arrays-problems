exports.min = function min (array) {
    if (array == undefined || array.length == 0) return 0;
    let little = array[0]; 
    for(let a = 0; a < array.length; a++) {
      if (array[a] < little) little = array[a]; 
    }
    return little;
  }
  
  exports.max = function max (array) {
    if (array == undefined || array.length == 0) return 0;
    let big = array[0]; 
    for(let b = 0; b < array.length; b++) {
      if (array[b] > big) big = array[b]; 
    }
    return big;
  }
  
  exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) return 0;
    return array.reduce((x,y) => x + y) / array.length; 
  }
  