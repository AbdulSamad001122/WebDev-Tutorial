document.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
  const options = { method: "GET", headers: { accept: "application/json" } };

  const generateButton = document.getElementById("generate");
  const quote = document.getElementById("quote");
  const authorName = document.getElementById("author");

  generateButton.addEventListener("click", async () => {
    const data = await getQuote();
    await displayData(data);
  });

  async function getQuote() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data); // Still logs full response
    return data.data;  // ✅ Only return the useful part
  } catch (error) {
    console.error(error);
  }
}


  async function displayData(data) {
    authorName.textContent = `${data.author}`;
    quote.textContent = `${data.content}`;
  }
});