import React from "react";

export default function MainButton({ text, bgcolor, color, action, length }) {
  return (
    <div className='inline' onClick={action}>
      <button
        className={`relative bg-${bgcolor} text-${color} py-2 px-4 shrink-0 w-${length}`}
      >
        {text}
        <span
          className={`absolute top-0 -right-2 w-1 h-10 bg-${bgcolor}`}
        ></span>
      </button>
    </div>
  );
}
