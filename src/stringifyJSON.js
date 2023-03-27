// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // declare result variable
  var result = '';
  // unstringifiable test
  if (typeof obj === 'function') {return;}
  if (obj === undefined) {return;}
  // base test
  if (typeof obj === 'string') {return '"' + obj + '"'}
  if (typeof obj === 'number') {return obj += ''}
  if (typeof obj === 'boolean') {return obj += ''}
  if (obj === null) {return obj += ''}
  console.log(result)
  // stringify array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]'
    }
    result += '['
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i])
      if (i < obj.length - 1 && obj.length > 1) {
        result += ','
      }
    }
    result += ']'
  }
  console.log(result)
  // stringify objects
  var counter = 0
if (typeof obj === 'object' && !Array.isArray(obj)) {
  if (Object.values(obj).length === 0){
    return '{}'
  }
  result += '{'
  for (var key in obj) {
    var test = stringifyJSON(key)
    if (!(typeof obj[key] === 'function') && !(key === 'undefined')) {
      result += stringifyJSON(key)
      result += ':'
      result += stringifyJSON(obj[key])
      if (Object.values(obj).length > 1 && counter < Object.values(obj).length - 1) {
        result += ','
        counter++
      }
    }
    }
    result +='}'
}
  return result;
};
