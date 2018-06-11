// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if(obj === null){
    result = 'null';
  }
  if(obj === undefined){
    result = 'undefined';
  }
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(typeof obj === 'number'){
    return obj + '';
  }
  if(typeof obj === 'boolean'){
    return obj + '';
  }
  if (Array.isArray(obj)) {
    result = result + '[';
    if (obj.length === 0) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        if(i==obj.length-1){
          result = result + stringifyJSON(obj[i]);
        }else{
          result = result + stringifyJSON(obj[i])+',';
        }
      }
    }

    result = result + ']';
  }
  return result;
};

//input: object (array, string, boolean, integer, null, object literal, undefined)
// output: string
// 
// create var result
// if obj is undefined
  // return 'undefined'
// if obj is null 
  // return 'null' 
// if obj is string
  // return obj 
// if obj is boolean
  // return obj + '' 
// if obj is number
  // return number + ''
// if Array.isArray(obj)
  // result = '[ '
  // if (array.length === 0)
    // return '[]'
  // iterate thru array 
    // if Array.isArray(array[i]) // return false will exit
      //return result = result + stringifyJSON(temp)
  // result + ' ]'
// if obj is obj literal
  // result = '{ '
  // 
  // iterate thru object using for keys
    //var k=obj_keys = Object.keys9=(obj)
    // if k == 0 then return '{}'
    // if obj[key] is not null or number or string or array or undefined?
     // return result = result + stringifyJSON(obj[key])
  // result + ' }'

