var exampleArray = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];
var returnVal = [];

function findConsecutiveRuns(array) {

  for (var i = 0; i < array.length; i++) {
    first =  i;
    second = i++;
    third =  second++;


    // if (array[first] - array[second] === 1) {

    //   if (array[second] - array[third] === 1) {

    //     console.log(first + ". " + array[first]);
    //   }

    // }

  }
  console.log(first);
  console.log(second);
  console.log(third);

}

findConsecutiveRuns(exampleArray);
// console.log(findConsecutiveRuns(exampleArray));
