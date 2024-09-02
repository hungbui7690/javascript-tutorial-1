/*
  Promise.withResolvers method

*/

const btnReview = document.querySelector('#btnReview')
const btnApprove = document.querySelector('#btnApprove')
const btnReject = document.querySelector('#btnReject')
const dialog = document.querySelector('dialog')

const { promise, resolve, reject } = Promise.withResolvers()

btnReview.addEventListener('click', () => dialog.show())
btnApprove.addEventListener('click', resolve)
btnReject.addEventListener('click', reject)

promise
  .then(() => (message.innerHTML = 'You approved it.'))
  .catch(() => (message.innerHTML = 'You rejected it.'))
  .finally(() => {
    message.hidden = false
    dialog.close()
    btnReview.remove()
  })

/*
  By using the Promise.withResolvers() method, we can achieve two objectives:

    - Centralizing the user interaction inside a promise.
    - Removing duplicate code by moving it to the finally() method of the promise.
  */
