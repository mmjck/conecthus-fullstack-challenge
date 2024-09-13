"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./styles.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IconCloseSVG } from "@/assets";

const Search = ({ onSearch }) => {
  const [q, setQ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(q);

    if (q && q != "") {
      onSearch(q);
    }
  };
  return (
    <div className="search-box px-5 space-x-2">
      <form onSubmit={handleSubmit} className="flex items-center">
        <button type="submit" onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} size="sl" className="icon" />
        </button>
        <input
          type="text"
          placeholder="Pesquisa"
          className="search-input pl-3"
          value={q}
          name="q"
          max={40}
          // onKeyDown={handleSubmit}
          onChange={(e) => {
            console.log(e.target.value);

            setQ(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setQ("");
          }}
        >
          <IconCloseSVG />
        </button>
      </form>
    </div>
  );
};

export default Search;
