const myMovie = {
  title: "movie 1",
  actor: "dave",
  genre: "sci-fi",
};

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
  personName: "sarah",
};

const index = myArray.findIndex(
  (person) => person.personName === data.personName
);

// console.log(`Index of ${data.personName}: `, index);
console.log(`Person element at index ${index}: `, myArray[index]);

myArray[index].personName = "betty";
console.log(myArray[index]);
