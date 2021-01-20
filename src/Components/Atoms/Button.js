import React from "react";

const Button = ({ text, bgColor, color, width, height }) => (
  <button className={`bg-${bgColor} text-${color} w-${width} h-${height}`}>
    {text}
  </button>
);

export default Button;
