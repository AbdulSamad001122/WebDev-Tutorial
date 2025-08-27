use("CrudDb");
db.createCollection("courses");

// ADD


// db.courses.insertOne({
//   name: "Sigma webdev",
//   price: 0,
//   assignments: 45,
//   projects: 6,
// });

// db.courses.insertMany([
//   {
//     name: "Sigma webdev",
//     price: 0,
//     assignments: 45,
//     projects: 6,
//   },
//   {
//     name: "React Mastery",
//     price: 299,
//     assignments: 30,
//     projects: 5,
//   },
//   {
//     name: "Fullstack Bootcamp",
//     price: 499,
//     assignments: 60,
//     projects: 10,
//   },
//   {
//     name: "Frontend Essentials",
//     price: 199,
//     assignments: 25,
//     projects: 4,
//   },
//   {
//     name: "Backend with Node.js",
//     price: 399,
//     assignments: 35,
//     projects: 6,
//   },
//   {
//     name: "MongoDB Deep Dive",
//     price: 149,
//     assignments: 20,
//     projects: 3,
//   },
//   {
//     name: "JavaScript Foundations",
//     price: 99,
//     assignments: 40,
//     projects: 5,
//   },
//   {
//     name: "TypeScript Pro",
//     price: 129,
//     assignments: 28,
//     projects: 4,
//   },
//   {
//     name: "UI/UX with Figma",
//     price: 89,
//     assignments: 18,
//     projects: 2,
//   },
//   {
//     name: "Express.js & API Design",
//     price: 179,
//     assignments: 32,
//     projects: 5,
//   },
// ]);



// READ

// let a = db.courses.find({ price: 399 });
// console.log(a);

// console.log(a.toArray());

// let b = db.courses.findOne({ price: 399 });
// console.log(b);



// UPDATE


// db.courses.updateOne({price : 0} , {$set:{price : 5000}})

// db.courses.updateMany({price : 0} , {$set:{price : 5000}})


// DELETE

db.courses.deleteOne({price : 5000})

db.courses.deleteMany({price : 5000})


