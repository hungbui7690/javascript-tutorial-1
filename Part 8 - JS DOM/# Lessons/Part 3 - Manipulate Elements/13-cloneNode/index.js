/*
  cloneNode
  - clone an element.

        let clonedNode = originalNode.cloneNode(deep)

  - The cloneNode() method accepts an optional parameter deep:
    
      If the deep is true, then the original node and all of its descendants are cloned.
      If the deep is false, only the original node will be cloned. All the node’s descendants will not be cloned.

*/

// 1) clone all descendants
let menu = document.querySelector('#menu')
let clonedMenu = menu.cloneNode(true)
clonedMenu.id = 'menu-mobile'
document.body.appendChild(clonedMenu)
