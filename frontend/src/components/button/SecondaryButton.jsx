import React from "react";

const SecondaryButton = ({ title, onClick }) => {
  return (
    <div className="bg-white border border-black px-10 py-2 rounded text-center">
      <button onClick={onClick}>
        <span className="text-black">{title}</span>
      </button>
    </div>
  );
};
export default SecondaryButton;
