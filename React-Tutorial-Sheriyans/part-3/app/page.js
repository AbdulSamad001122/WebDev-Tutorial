"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";

const page = () => {
  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <button
        onClick={notify}
        className="bg-green-600 border-2 border-green-950 px-3 py-3 font-bold rounded-md text-white cursor-pointer hover:bg-green-900  "
      >
        Login
      </button>
      <ToastContainer />
    </div>
  );
};

export default page;
