import React from "react";

const PrimaryButton = ({ title, onClick, disabled, type }) => {
  let style = "bg-blue01 border-black px-10 py-2 rounded";

  if (disabled) {
    style = "bg-gray-400 px-10 py-2 rounded cursor-not-allowed text-white";
  }
  return (
    <button onClick={onClick} type={type}>
      <div className={style}>
        <span className="text-white">{title}</span>{" "}
      </div>
    </button>
  );
};
export default PrimaryButton;
