// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode) {
  // var completeBody = document.body;
  // currentNode = completeBody;
  if (currentNode === undefined) {
    currentNode = document.body;
  }
  var result = [];
  var class_list = currentNode.classList;
  for(var i = 0; i < class_list.length; i++){
    // if(class_list.contains(className)){
    //   result.push(currentNode);  
    // }
    if(class_list[i] === className) {
      result.push(currentNode);  
    }
  }
  var children = currentNode.children;
  if(children.length === 0){
    return result;
  } else {
    for(var j = 0; j < children.length; j++){
      result = result.concat(getElementsByClassName(className, children[j]));
    }
  }
  return result;  // your code here
};
//input is className and the DOM
//We want to get initially a list of all the nodes and to compare each name with 
//output = array of nodes
//document.body to get complete body of DOM

