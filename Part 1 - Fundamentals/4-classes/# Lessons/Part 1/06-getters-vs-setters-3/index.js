/*
  Using getter in an object literal

*/

// The following example defines a getter called latest to return the latest attendee of the meeting object:
let meeting = {
  attendees: [],

  add(attendee) {
    console.log(`${attendee} joined the meeting.`)
    this.attendees.push(attendee)
    return this // *** chaining
  },
  get latest() {
    let count = this.attendees.length
    return count == 0 ? undefined : this.attendees[count - 1]
  },
}

meeting.add('John').add('Jane').add('Peter')
console.log(`The latest attendee is ${meeting.latest}.`)

/*
  Summary
  - Use the get and set keywords to define the JavaScript getters and setters for a class or an object.
  - The get keyword binds an object property to a method that will be invoked when that property is looked up.
  - The set keyword binds an object property to a method that will be invoked when that property is assigned.

*/
