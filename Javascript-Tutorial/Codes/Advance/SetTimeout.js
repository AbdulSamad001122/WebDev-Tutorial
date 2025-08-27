function sayhello() {
  console.log("Hi, how are you ?");
}

setTimeout(() => {
  sayhello();
}, 4000);


setTimeout(() => {
  console.log("Chai code");
}, 7000);



for (let index = 0; index < 10; index++) {
    console.log(index);
}
