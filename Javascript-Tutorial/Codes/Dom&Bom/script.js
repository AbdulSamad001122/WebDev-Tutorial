// Example - 1

document
  .getElementById("changeTextbutton")
  .addEventListener("click", function () {
    let heading = document.getElementById("subheading");
    console.log(heading);
    heading.textContent = "Heading changed!";
  });

// Example - 2

document
  .getElementById("highlightFirstcity")
  .addEventListener("click", function () {
    let cities_list = document.getElementById("cities-list");
    cities_list.firstElementChild.classList.add("highlight");
  });

// Example - 3

document.getElementById("change-order").addEventListener("click", function () {
  let order_name = document.getElementById("order-type");
  order_name.textContent = "Zinger Burger";
  order_name.style.backgroundColor = "#ff8f8f";
  order_name.style.padding = "5px";
});

// Example - 4

document.getElementById("add-new-item").addEventListener("click", function () {
  let new_item = document.createElement("li");
  new_item.textContent = "Butter";
  document.getElementById("shopping-list").appendChild(new_item);
});
