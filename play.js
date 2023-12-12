// const myMovie = {
//   title: "movie 1",
//   actor: "dave",
//   genre: "sci-fi",
// };

const myArray = [
  {
    personName: "jane",
    age: 24,
  },
  {
    personName: "chris",
    age: "53",
  },
  {
    personName: "sarah",
    age: "35",
  },
];

const data = {
  personName: "jane",
};

const index = myArray.findIndex(
  (person) => person.personName === data.personName
);

// console.log(`Index of ${data.personName}: `, index);
console.log(`Person element at index ${index}: `, myArray[index]);

// myArray[index].personName = "betty";
// console.log(myArray[index]);
// myArray[index].age = 64;
// console.log(myArray[index]);
// const superArray = ["bill", "dave", "fred"];

// const index = 2;

// console.log(superArray[index]);

// is "2" equal to "1+1"
// 1 + 1 === 2

// assignment operator is "="

const myVariable = ["apples"];
