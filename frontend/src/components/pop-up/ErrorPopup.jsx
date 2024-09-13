"use client";
import { faChevronLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const ErrorPopUp = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        console.log("called");

        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`flex items-center justify-between w-[300px] fixed top-4 left-4 bg-success text-white px-6 py-4 rounded shadow-lg transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        <div className="mr-2">
          <FontAwesomeIcon icon={faChevronLeft} size="20px" c />
        </div>
        <p>Cadastro Realizado!</p>
      </div>
      <FontAwesomeIcon icon={faClose} size="24px" onClick={onClose} />
    </div>
  );
};

export default ErrorPopUp;
