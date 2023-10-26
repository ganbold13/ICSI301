import React from "react";
import SearchIcon from "./icons/search_icon";

export default function SearchBar() {
  return (
    <div className="pr-2 mr-3">
      <div className="flex items-center px-4 bg-gray-300 h-9 rounded-lg">
        <SearchIcon/>
      <input className="bg-inherit selection:border-0" placeholder="Search">
      </input>
      </div>
    </div>
  );
}