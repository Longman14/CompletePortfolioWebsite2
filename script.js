// // let myGrades = {
// //   test0: 100,
// //   test1: 68,
// //   test2: 98.5,
// //   test3: 90,
// // };
// // myGrades.test1 = 88;
// // console.log(myGrades);


// // // adding a new key/value pair
// // let myFamily = {
// //   mom: "Cynthia",
// //   dad: "Paul",
// // };

// // myFamily.sister = "Lucinda"; // dot notation
// // myFamily["brother in law"] = "Merle"; // bracket notation
// // console.log(myFamily);

// // using the accumulator pattern
// let colors = ["red", "white", "blue"];
// let statement = "My favorite colors are ";

// for (let i = 0; i < colors.length; i++) {
//   // what could you write here?
//   console.log(statement + colors[0] + ", " + colors[1] + ", and " + colors[2]);
//   // console.log(statement + colors[0,1] + "and" + colors[2])
// }

// // challenge 1 - make the statement say:
// // 'My favorite colors are red, white, blue,'

// // challenge 2 - make the statement say:
// // 'My favorite colors are red, white and blue.'

// console.log(statement);

function displayGreeting(name, salutation='Hello') {
  console.log(`$ {salutation }, $ {name } `);
}
let dammy = "Dahmy";
displayGreeting(dammy);