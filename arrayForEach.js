// A very common implementation of callback functions is with forEach which uses callbacks
//to allow us to easily iterate through the elements of an array.

// Read about iterating through elements of an array using
//JavaScript's Array.prototype.forEach() method.

// Refactor the function findWaldo to use the forEach() method instead of a for loop.

function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] == "Waldo") {
    arr.forEach(function(item, index){
      if (item == "Waldo"){
        found(index);
      }
  })
}
function actionWhenFound(i) {
    console.log("Found him! " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);