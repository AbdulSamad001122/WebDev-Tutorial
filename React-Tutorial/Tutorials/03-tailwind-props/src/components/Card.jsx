import React from "react";

function Card({ username = "None" , post = "Not assigned yet"}) {
  return (
    <>
      {/* <!-- Card Body --> */}
      <div class="flex bg-[#1e293b] p-4 text-white m-5">
        {/* <!-- Image --> */}
        <img
          class="w-24 h-24 object-cover rounded-md mr-4"
          src="https://i.ibb.co/T4JkQm9/vite-tailwind-guy.png"
          alt="Profile"
        />

        {/* <!-- Text Content --> */}
        <div>
          <p class="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            quaerat.
          </p>
          <p class="text-sm text-sky-400 font-semibold">{username}</p>
          <p class="text-sm text-gray-400">{post}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
