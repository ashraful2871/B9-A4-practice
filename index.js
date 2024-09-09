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

// console.log(
//   deleteInvalids([
//     1,
//     null,
//     undefined,
//     18,
//     -19,
//     NaN,
//     "12",
//     [1, 2],
//     { ob: "lala" },
//   ])
// );
// console.log(deleteInvalids(["1", { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));

// ----------------problem 4---------------------

//output: Google#kolimuddin@1999

function password(obj) {
  if (
    obj.name === undefined ||
    obj.siteName === undefined ||
    obj.birthYear === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }
  const siteNameCapital = obj.siteName[0].toUpperCase() + obj.siteName.slice(1); // bujai nita hobe ajk support season e
  const result = siteNameCapital + "#" + obj.name + "@" + obj.birthYear;
  return result;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);

// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "maisha", birthYear: 2002 }));

// -------------------problem 5-----------------------

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalIncome = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      let tax = payment * 0.2;
      totalIncome = totalIncome + (payment - tax);
    } else {
      totalIncome += payment;
    }
  }
  let savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([1000, 2000, 2500], 5000));
// console.log(monthlySavings([900, 2700, 3400], 10000));
// console.log(monthlySavings(100, [900, 2700, 3400]));
