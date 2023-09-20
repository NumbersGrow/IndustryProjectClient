import React from 'react';
import './SearchInput.scss';
import { ReactComponent as ArrowIcon } from "../../assets/icons/chevron-right.svg";

function SearchInput() {
  return (
    <div className="search-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search for product"
        />
        <ArrowIcon className="arrow-icon" />
      </div>
    </div>
  );
}

export default SearchInput;