import React from "react";
import { useEffect } from "react";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("Color was changed")
  }, [color])
  

  return (
  <div>
    I am navbar {color} of color hehe..
    </div>

  )
};

export default Navbar;
