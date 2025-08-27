function outer() {
    return function inner() {
      return "Inner function called";
    }();
  }
  
  console.log(outer());
  