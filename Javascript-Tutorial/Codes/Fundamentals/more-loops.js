// CHALLENGE - 1

// let teas = ["green tea", "ginger tea", "garlic tea", "chai" , "milk tea"];

// let collected_chais = [];

// let get_one_chai;

// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] === "chai") {
//     console.log(`The word "Chai" is detected!`);
//     break;
//   }

//   console.log(teas[i]);
// }

// CHALLENGE - 2

// let cities = ["London", "New York", "Berlin", "Paris", "Morocco"];

// let visited_cities = []

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === "Paris") {
//     continue;
//   }

//   console.log(cities[i]);

//   visited_cities.push(cities[i])
// }

// console.log(visited_cities)

// CHALLENGE - 3

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let smallNumbers = [];

// for (const eachnumber of numbers) {

//     if (eachnumber === 4){
//       break
//     }

//     smallNumbers.push(eachnumber)

// }

// console.log(smallNumbers)

// CHALLENGE - 4

// let teas = [
//   "green tea",
//   "ginger tea",
//   "herbal tea",
//   "garlic tea",
//   "chai",
//   "milk tea",
// ];

// preferred_teas = [];

// for (const each_tea of teas) {
//   if (each_tea === "herbal tea") {
//     continue;
//   }

//   console.log(each_tea);

//   preferred_teas.push(each_tea)
// }

// console.log(preferred_teas)

// CHALLENGE - 5

// let cities_population = {
//   Newyork: "500000",
//   Karachi: "955264",
//   Madina: "342759",
//   Berlin: "679244",
//   Islamabad: "749236",
//   Makkah: "39627635",
// };

// let city_new_population = {};

// for (const city in cities_population) {
//   if (city === "Berlin") {
//     break;
//   }
//   city_new_population[city] = cities_population[city];
// }

// console.log(city_new_population);

// CHALLENGE - 6

// let cities_population = {
//   Newyork: "5000",
//   Karachi: "10000",
//   Madina: "2000",
//   Berlin: "7000",
//   Islamabad: "40000",
//   Makkah: "3500",
// };

// let large_cities = {};

// let each_city_population;

// for (const city in cities_population) {

//   if (cities_population[city] <= 3000) {
//     continue;
//   }

//   large_cities[city] = cities_population[city];
// }

// console.log(large_cities)

// CHALLENGE - 7

// numbers = [2, 5, 7, 9];

// doubled_numbers = [];

// for (const each_num of numbers) {
//   if (each_num == 7) {
//     continue;
//   }

//   doubled_numbers.push(each_num * 2)
// }

// console.log(doubled_numbers)

// CHALLENGE - 8

all_teas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

short_teas = [];

for (const each_tea of all_teas) {
  if (each_tea.length > 10) {
    break;
  }

  short_teas.push(each_tea);
}

console.log(short_teas)
