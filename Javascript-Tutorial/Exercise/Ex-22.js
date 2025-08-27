const array = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
    { name: "Eve" }
  ];
  

const getNames = array => array.map(array => `${array.name}`)

console.log(getNames(array))