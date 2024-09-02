/*
  querySelector
  - To convert the NodeList to an array, you use the Array.from() method like this:

        let nodeList = document.querySelectorAll(selector);
        let elements = Array.from(nodeList);

*/

// I. Combinators
// 1) descendant combinator
let link = document.querySelector('li a')
// console.log('li a', link)

// 2) Child combinator
// The > child combinator finds all elements that are direct children of the first element:
// The following example finds all li elements that are directly inside a <ul> element:
let listItems = document.querySelectorAll('ul > li')
// console.log('ul > li', listItems)

// To select all li elements that are directly inside a <ul> element with the class nav:
listItems = document.querySelectorAll('ul.menu > li')
// console.log('ul.menu > li', listItems)

// 3) General sibling combinator
// The ~ combinator selects siblings that share the same parent:
// For example, h2 ~ a will match all <p> elements that follow the h2 element, immediately or not:
let links = document.querySelectorAll('h2 ~ p')
console.log('h2 ~ p', links)

// 4) Adjacent sibling combinator
// The + adjacent sibling combinator selects adjacent siblings:
// For example, h1 + a matches all elements that directly follow an h1:
links = document.querySelectorAll('h2 + p')
console.log('h2 + p', links)

// And select the first <a> that directly follows an h1:
links = document.querySelector('h1 + a')

// II. Pseudo
// 1) Pseudo-classes
// The : pseudo matches elements based on their states:
// For example, the li:nth-child(2) selects the second <li> element in a list:
let listItem = document.querySelector('li:nth-child(2)')
console.log('li:nth-child(2)', listItem)

// 2) Pseudo-elements
// The :: represent entities that are not included in the document. So that, we cannot select pseudo-elements like below
let firstLine = document.querySelector('p::first-line')
console.log('p::first-line', firstLine)

// Instead of this, we need to create <span>, then select that span
firstLine = document.querySelector('p span')
console.log('p span', firstLine)
