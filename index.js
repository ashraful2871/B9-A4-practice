//---------------------problem 1----------------------

function calculateMoney(ticketSale) {
  if (ticketSale < 0 || typeof ticketSale !== "number") {
    return "Invalid Number";
  }
  let remainingAmount = ticketSale * 120 - (500 + 8 * 50);
  return remainingAmount;
}

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));
// console.log(calculateMoney(" a"));

//-------------------problem 2----------------------

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  let lastLetter = name[name.length - 1].toLowerCase();
  let checkArray = ["a", "y", "i", "e", "o", "u", "w"];
  // let result = false;
  // for (let char of checkArray) {
  //   if (char === lastLetter) {
  //     result = true;
  //   }
  // }
  let result = checkArray.includes(lastLetter);
  if (result) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
  // return result ? "Good Name" : "Bad Name";
}

// console.log(checkName("salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar "));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

//---------------problem 3-------------------

function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  }
  let numberArray = [];
  for (let elements of array) {
    if (typeof elements === "number" && isNaN(elements) === false) {
      numberArray.push(elements);
    }
  }
  return numberArray;
}

console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
