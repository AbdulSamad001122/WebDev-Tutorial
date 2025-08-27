// Task 1 - first want to make a functionalityog adding products in cart
// Sub task 1 -

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  const cart_list = document.getElementById("cart-list");
  const total_element = document.getElementById("total-price");
  const empty_para = document.getElementById("empty-cart");

  let deleteBtn = document.createElement("button");

  let total = 0;

  // Step 1: Load from localStorage
  let cart_items = JSON.parse(localStorage.getItem("cart")) || [];
  display_data_on_frontend_from_localstorage();

  function get_name_and_price_of_the_clicked_product() {
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const card = e.target.closest(".product-card");
        console.log(card);
        const product_name = card.querySelector(".product-name").textContent;
        const product_price = card.querySelector(".product-price").textContent;
        console.log(product_name);
        console.log(product_price);
        cart_items.push({ name: product_name, price: product_price }); // add here
        show_name_price_in_cart(product_name, product_price, deleteBtn);
        save_data_into_localstorage(cart_items); // then save
        show_total(product_price);
      });
    });
  }

  function show_name_price_in_cart(product_name, product_price) {
    empty_para.classList.add("hidden");
    cart_list.classList.remove("hidden");

    const new_li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";

    new_li.innerHTML = `${product_name} - ${product_price} `;
    new_li.appendChild(deleteBtn);
    cart_list.appendChild(new_li);

    // 👇 This is the main delete logic
    deleteBtn.addEventListener("click", () => {
      new_li.remove(); // remove from DOM

      // remove from cart_items
      cart_items = cart_items.filter(
        (item) => !(item.name === product_name && item.price === product_price)
      );

      // update localStorage
      save_data_into_localstorage(cart_items);

      // update total
      const price = parseFloat(product_price.replace("$", ""));
      total -= price;
      total_element.textContent = `$ ${total.toFixed(2)}`;

      // check if cart is empty
      if (cart_items.length === 0) {
        empty_para.classList.remove("hidden");
        cart_list.classList.add("hidden");
      }

      // 👇
      // The delete logic ends
    });
  }

  function show_total(product_price) {
    product_price = product_price.replaceAll("$", "");
    product_price = Number(product_price);
    total = total + product_price;
    total_element.textContent = `$ ${total}`;
    console.log(total);
  }

  function save_data_into_localstorage(cart_items) {
    localStorage.setItem("cart", JSON.stringify(cart_items));
  }

  function display_data_on_frontend_from_localstorage() {
    if (cart_items.length > 0) {
      empty_para.classList.add("hidden");
      cart_list.classList.remove("hidden");

      cart_items.forEach((item) => {
        show_name_price_in_cart(item.name, item.price);
        total += Number(item.price.replace("$", ""));
      });

      total_element.textContent = `$ ${total}`;
    }
  }


  get_name_and_price_of_the_clicked_product();
});
