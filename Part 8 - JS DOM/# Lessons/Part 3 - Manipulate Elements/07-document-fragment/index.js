/*
  DocumentFragment
  - The DocumentFragment interface is a lightweight version of the Document that stores a piece of document structure like a standard document. However, a DocumentFragment isn’t part of the active DOM tree.

  - If you make changes to the document fragment, it doesn’t affect the document or incurs any performance.

  - Typically, you use the DocumentFragment to compose DOM nodes and append or insert it to the active DOM tree using appendChild() or insertBefore() method.

  - Use the DocumentFragment to compose DOM nodes before updating them to the active DOM tree to get better performance.

*/

// 1) To create a new document fragment, you use the DocumentFragment constructor like this:
let fragment = new DocumentFragment()

// Or you can use the createDocumentFragment() method of the Document object:
let fragmentX = document.createDocumentFragment()
// This DocumentFragment inherits the methods of its parent, Node, and also implements those of the ParentNode interface such as querySelector() and querySelectorAll(). (pic)

// 2) The following code creates a list of <li> elements (<li>) and append each to the <ul> element using the DocumentFragment:
let languages = ['JS', 'TypeScript', 'Elm', 'Dart', 'Scala']
let langEl = document.querySelector('#language')

languages.forEach((language) => {
  let li = document.createElement('li')
  li.innerHTML = language
  fragment.appendChild(li) // *** we don't want to use document.body > but fragment
})

langEl.appendChild(fragment)
