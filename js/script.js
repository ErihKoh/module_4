// task 1

// // Write code under this line
// const addIndex = (element, index) => element + index;
// // Write code under this line
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   "use strict";
//   // Write code under this line
//   const numbers = new Array(array.length);

//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]

// task 2

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line

//     if (cb(element, index, array)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// task 3

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   "use strict";
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// task 4

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']

// task 5

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter((item) => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   "Medkit",
//   inventory.add.bind(inventory) // Write code in this line
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   "Gas mask",
//   inventory.remove.bind(inventory) // Write code in this line
// );

// const arrayRemove = [...inventory.items];

// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']

// function fakeBin(x) {
//   const array = [];
//   for (let i = 0; i < x.length; i += 1) {
//     x[i] < 5 ? array.push(0) : array.push(1);
//   }
//   return console.log(array.join(""));
// }

// //const x = "45385593107843568";
// //const x = "509321967506747";
// //const x = "366058562030849490134388085";

// fakeBin("45385593107843568");
// fakeBin("509321967506747");
// fakeBin("366058562030849490134388085");

// function fakeBin(x) {
//   return x
//     .split("")
//     .map((a) => (a < "5" ? "0" : "1"))
//     .join("");
// }

// function checkExam(array1, array2) {
//   var score = 0;

//   for (var i = 0; i < array1.length; i++) {
//     if (array1[i] == array2[i]) {
//       score += 4;
//     } else if (array2[i] === "") {
//       score += 0;
//     } else {
//       score -= 1;
//     }
//   }

//   if (score < 0) {
//     score = 0;
//   }

//   return score;
// }

// function findMultiples(int, limit) {
//   let result = [];

//   for (let i = int; i <= limit; i += int) result.push(i);

//   return result;
// }

// console.log(findMultiples(5, 25));

// function alternateCase(s) {
//   const array = s.split("");
//   const arra1 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     let element = array[i];
//     if (element === element.toLowerCase()) {
//       arra1.push(element.toUpperCase());
//     } else arra1.push(element.toLowerCase());
//   }
//   return console.log(arra1.join(""));
// }

// //   s[i] === toLowerCase(s[i]) ? toUpperCase() : toLowerCase();
// // }
// alternateCase("Hello World");

// function dutyFree(normPrice, discount, hol) {
//   let discountCash = (normPrice / 100) * discount;
//   return Math.floor(hol / discountCash);
// }
// console.log(dutyFree(17, 10, 500));

// function wordPattern(word) {
//   const arr = word.split("");
//   const arr1 = [];
//   let index = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     index = arr.indexOf(arr[i]);
//     arr1.push(index);
//   }
//   return arr1;
// }
// console.log(wordPattern("hello"));

const sample = [1, 2, 3];

let sum = sample.reduce((sum, elem) => sum + elem);
console.log(sum);
