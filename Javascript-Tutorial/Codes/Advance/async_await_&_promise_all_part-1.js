function fetch_data() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reject({ name: "Abdul Samad", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function get_user_data(params) {
  try {
    console.log("Fetching user data.....");
    const user_data = await fetch_data();
    console.log("User data fetched successfully!");
    console.log("User Data : ", user_data);
  } catch (error) {
    console.log("Error fetching user data : ", error);
  }
}

get_user_data();
