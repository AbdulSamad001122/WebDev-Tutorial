// CHALLENGE - 1

// function makeTea(typeOfTea) {
//   return `Making ${typeOfTea}`;
// }

// let tea_order = makeTea ("Lemon Tea");
// console.log(tea_order)

// CHALLENGE - 2

// function order_tea(tea_type) {
//   function confirm_order() {
//     return ` Order confirmed for your ${tea_type} !`;
//   }

//   return confirm_order();
// }

// let order_confirmation = order_tea("Green tea");

// console.log(order_confirmation);

// CHALLENGE - 3

// function greet() {}

const calculate_total = (price, quantity) => {
  return price * quantity;
};

let total_cost = calculate_total(400 , 5 )

console.log(total_cost);
