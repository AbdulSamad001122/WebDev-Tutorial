function fetch_post_data() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000); 
  });
}

function fetch_comment_data() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000); 
  });
}


async function get_blog_data() {
  try {
    console.log("Fetching blog data...");
    // const blog_data = await fetch_post_data();
    // const comment_data = await fetch_comment_data();

    const [post_data , comment_data] = await Promise.all([fetch_post_data(), fetch_comment_data()])

    console.log(post_data)
    console.log(comment_data)
    console.log("Fetch completed");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

get_blog_data();