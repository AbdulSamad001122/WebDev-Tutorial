function fetch_data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("An error occured!");
      }
    }, 3000);
  });
}

fetch_data()
  .then((data) => {
    console.log(data); // ✅ Data fetched successfully!
    return data.toUpperCase();
  })
  .then((newData) => {
    console.log(newData); // ✅ DATA FETCHED SUCCESSFULLY!
  })
  .catch((error) => {
    console.error(error);
  });
