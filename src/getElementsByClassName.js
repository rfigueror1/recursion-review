// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var completeBody = document.body.childNodes;
  var result = [];
  for(var i = 0; i<completeBody.length; i++){
    if(completeBody[i].childNodes.length >= 1){
      getElementsByClassName(completeBody[i]);
    }else{
      if(completeBody[i].className === className){
        result.push(completeBody[i]);
      }
    }
  }
  console.log(result);
  return result;  // your code here
};
//input is className and the DOM
//We want to get initially a list of all the nodes and to compare each name with 
//output = array of nodes
//document.body to get complete body of DOM

