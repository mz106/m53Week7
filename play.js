const dynamicKey0 = "favBook";
const dynamicValue0 = "LotR";

const dynamicKey1 = "favMovie";
const dynamicValue1 = "aliens";

const dynamicKey2 = "likesCoffee";
const dynamicValue2 = true;

// const obj = {
//   name: "Aman",
//   age: 25,
//   city: "Noida",
// };

const dynamicObject = {
  [dynamicKey0]: dynamicValue0,
  [dynamicKey1]: dynamicValue1,
  [dynamicKey2]: dynamicValue2,
};

console.log(dynamicObject);

//
const response = await fetch("my url/book", {
  method: "POST",
  mode: "cors",
  body: JSON.stringify({
    title: "water bottles",
    author: "dave",
    genre: "horror",
  }),
});

const data = await response.json();

if (data.message === "book added") {
  //do something with the book
} else if (data.message === "the error has landed") {
  // do something else with the error
  if (data.error.code === 11000) {
    // tell user that the book with that title has already been added to the db
  }
}
