/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
   constructor(list) {
      this.list = [];

   }
   static from(array) {

      let temp = new Group();
      for (let item of array) {
         temp.list.push(item);
      }
      return (temp);
   }

   has(value) {

      return (this.list.includes(value));

   }

   add(value) {
      let temp = new Group();
      let list2 = this.list


      if (list2.includes(value) === false) {
         list2.push(value)
      }

      return(list2)

   }

   delete(value) {
      let temp = new Group();
      let list2 = this.list

      let valueloc = list2.indexOf(value)
      console.log(list2);


      if (list2.includes(value) === true) {
         list2.splice(valueloc,1)
         console.log(list2)
      }

      console.log(list2);
      return(list2)

   }

}



// Tests:
let group = Group.from([10, 20]);

console.log(group)
console.log(group.has(10));
//  → true
console.log(group.has(30));
// → false
console.log(group.add(10));
group.delete(10);
console.log(group.has(10));
//   // → false

