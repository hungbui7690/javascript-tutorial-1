/*
  Recursive Function
  - A recursive function is a function that calls itself until it doesn’t. This technique is called recursion.

*/

//////////////////////////
// 1) Calculate the sum of n natural numbers example
// Suppose you need to calculate the sum of natural numbers from 1 to n using the recursion technique. To do that, you need to define the sum() recursively as follows:
function sum(n) {
  if (n <= 1) {
    return n
  }
  return n + sum(n - 1)
}
/*
  sum(n) = n + sum(n-1)
  sum(n-1) = n - 1 + sum(n-2)
  ...
  sum(1) = 1

  Base Case:

    The function starts with an “if” statement that checks if n is less than or equal to 1.
    If n is 1 or less, the function simply returns n. This is the base case, which serves as the stopping condition for the recursion.

  Recursive Case:

    If the base case is not met (i.e., n is greater than 1), the function enters the block after the if statement.
    The function returns the sum of n and the result of calling itself with the argument (n - 1). This is where the recursion happens.

  How it Works:

    For example, if you call sum(3), the function first checks if 3 is less than or equal to 1 (base case not met).
    Since it’s not the base case, it calculates 3 + sum(2). Now, it calls itself with the argument 2.
    In the next recursive call with sum(2), it calculates 2 + sum(1).
    Again, in the next recursive call with sum(1), it reaches the base case and returns 1.
    Now, the previous calls are resolved: 2 + 1 gives 3, and 3 + 3 gives the final result of 6.

  Termination:

    The recursion keeps happening, reducing the problem to smaller sub-problems until it reaches the base case.
    Once the base case is reached, the function starts to unwind, combining the results from each level of recursion until the final result is obtained.
*/
