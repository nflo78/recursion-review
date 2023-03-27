// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// We are going to return a list or "array" of elements by a classname
// we need to recursively traverse the DOM
//
var getElementsByClassName = function(className) {
  // get document body and check if it has the classname
  // create a result array
  // if the first test passes push that to array

  var resultArray = [];

 
   if ( document.body.classList.contains(className)){
    resultArray.push(document.body)
   }

   var recurse  = function(nodelist){
    for ( var i = 0; i < nodelist.length; i++){
      if ( nodelist[i].classList !== undefined ) {
        if ( nodelist[i].classList.contains(className) ) {
          resultArray.push(nodelist[i]);
        }
        if (nodelist[i].childNodes){
          recurse(nodelist[i].childNodes)
        }
      }
    }
   }


   if ( document.body.childNodes ) {
    recurse(document.body.childNodes)
   }
   return resultArray;
};
