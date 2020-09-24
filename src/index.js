import { compose, pipe } from 'lodash/fp';
import { Map } from 'immutable';
import { produce } from 'immer';
import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

//called every time state changes
const unsubsribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

//dispatching actions
//state = reducer(state,action);
//notify subscribers
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubsribe();

// store.dispatch(bugRemoved("remove"));

// console.log(store.getState());

//Redux fundamentals

// function sayHello() {
//   return function() {
//     return "Hello World";
//   }
// }

// let fn = sayHello();
// let message = fn();

// // //set function to variable, but not calling it bvecause don't want return value
// // //just passing function
// // let fn = sayHello;

// // //same as sayHello()
// // fn()

// // //passing function as argument
// // function greet(fnMessage) {
// //   console.log(fnMessage());
// // }

// // greet(sayHello);

// let input ="  Javascript   ";
// let output = "<div>" + input.trim() + "</div>"

// //trim
// //wrap in div

// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();

// //working as higher order function
// const transform = pipe(trim, toLowerCase, wrap("div"));
// console.log(transform(input));

// const person = { 
//   name: "Mo",
//   address: {
//     country: "USA",
//     city: "Nashville"
//   } 
// };
// //spread operator copied person object
// //shallow copy
// // const updated = {...person, name: "Jo"};

// //deep copy
// const updated = {
//   ...person, 
//   address: {
//     ...person.address,
//     city: "New York"
//   },
//   name: "Jo"
// };
// updated.address.city = "New York";
// console.log(person);

// const numbers = [1, 2, 3];

// //Adding
// const index = numbers.indexOf(2);
// const added = [
//   ...numbers.slice(0, index),
//   4,
//   ...numbers.slice(index)
// ]
// console.log(added);

// //Removing
// //Return all except 2
// const removed = numbers.filter(n => n !== 2);
// console.log(removed);

// //Updating
// //replace 2 with 20
// const updated2 = numbers.map(n => n === 2 ? 20 : n);
// console.log(updated2);

// //immutable.js
// let book = Map({title: "Harry Potter"});

// function publish(book) {
//   return book.set("isPublished", true);
// }

// book = publish(book);
// //toJS returns JS object
// console.log(book.toJS());

// //immer
// let book2 = {title: "HP"};

// function publish1(book) {
//   //product taking copy of book and applying changes from function in line 103
//   return produce(book2, draftBook => {
//     draftBook.isPublished = true;
//   })
// }

// let updated3 = publish1(book);
// console.log(updated3);