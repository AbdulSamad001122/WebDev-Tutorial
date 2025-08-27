// CHALLENGE - 1

function makeTea(typeoftea){
    return `Make tea : ${typeoftea}`
}

function process_tea_order(teafunction){
    return teafunction("earl grey")
}

let order = process_tea_order(makeTea)

console.log(order)

// CHALLENGE - 2

function create_tea_maker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = create_tea_maker();
console.log(teaMaker("Green Tea"));
