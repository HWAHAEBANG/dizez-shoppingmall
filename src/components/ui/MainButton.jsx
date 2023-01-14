import React from "react";

export default function MainButton({ text, bgcolor, color }) {
  return (
    <div className=' inline'>
      <button className={`relative bg-${bgcolor} text-${color} py-2 px-4`}>
        {text}
        <span
          className={`absolute top-0ya -right-2 w-1 h-10 bg-${bgcolor}`}
        ></span>
      </button>
    </div>
  );
}
