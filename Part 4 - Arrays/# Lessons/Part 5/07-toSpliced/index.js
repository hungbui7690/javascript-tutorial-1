/*
  toSpliced

    The toSpliced() method enables you to obtain a new array by removing and/or replacing specified elements at a given index, all while leaving the original array untouched.

    The toSpliced() method, unlike the splice() method, doesn’t alter the original array in place. Instead, it returns a new array containing the modified elements, leaving the original array unchanged.

    Here’s the syntax of the toSpliced() method:

        Array.prototype.toSpliced(start, deleteCount, element1, element2,... elementN)    

    In this syntax:

        start: This is a zero-based index from which to begin changing the array.
        deleteCount (optional): An integer that indicates the number of elements to remove the array starting at the start. If deleteCount is zero, the method does not remove any elements. In this case, you need to specify at least one element after it to add to the array.
        element1, element2,… elementN: New elements to add to the array starting from the start. If no you don’t specify any element, the method only does the removal.

    The toSpliced() method returns a new array comprising all elements before the specified start, followed by element1, element2, …, elementN, and all elements after start + deleteCount.

*/

// 1) Using the toSpliced() method to remove elements from an array
// The example below demonstrates the use of the toSpliced() method to remove elements from an array and generate a new array without those elements:
const scores = [1, 2, 3, 4, 5]
const newScores = scores.toSpliced(0, 2)
console.log(scores)
console.log(newScores)
// The output confirms that the original array (scores) remains unchanged, while the returned array (newScores) has had two elements removed.

// 2) Using the toSpliced() method to add elements to an array
// The following example uses the toSpliced() method to add two numbers to the beginning of the scores array:
const scores1 = [3, 4, 5]
const newScores1 = scores1.toSpliced(0, 0, 1, 2)
console.log(scores1)
console.log(newScores1)
/*
  In this example:

    The first argument 0 indicates that the method will start changing the array at position 0.
    The second argument 0 instructs the method to not remove any elements.
    The last two arguments 1 and 2 are the new element that the method adds to the array

  The method returns a new array newScores with two new elements 1 and 2 at the beginning of the array.
*/

// 3) Using the toSpliced() to replace elements in an array
// The following example uses the toSpliced() method to replace two numbers at the beginning of the scores array:
const scores2 = [0, 0, 3, 4, 5]
const newScores2 = scores2.toSpliced(0, 2, 1, 2)
console.log(scores2)
console.log(newScores2)
/*
  In this example:

    The first argument 0 (start) indicates that the method will start changing the array at position 0.
    The second argument 2 (deleteCount) instructs the method to remove two elements starting at position 0. In other words, it removes the first and second elements of the scores array.
    The last two arguments are the new elements the method adds to the scores array at position 0.

*/
