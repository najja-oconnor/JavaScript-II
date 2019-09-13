// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/
//callback function 
function findLength(x) {
  console.log(x)
}

//function given callback
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, findLength)

function findLast(x) {
  console.log(x)
}

function last(arr, cb) {
  return cb(arr[3])
}

last(items, findLast)

//addUp is callback 

  //function callback is being passed into 
  function sumNums(x, y, callback) {
    return callback(x + y);
  }

  sumNums(3, 4, function(addUp){
    console.log(addUp)
  })

  function multiplyNums(x, y, callback) {
    return callback(x * y);
  }

  multiplyNums(50, 666, function(multiply){
    console.log(multiply) ;
  })

  function contain (item, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === item) {
        return true;
      } else {
        return false;
      }
    }
  }

    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
  

  contains(items, )

  /* STRETCH PROBLEM */

  function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
  }
