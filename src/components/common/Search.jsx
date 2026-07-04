import React from "react";

const Search = ({ placeholder, search, setSearch }) => {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="search-container">
            <input
                id="search"
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={handleSearch}
                className="search-input"
            />
            <span className="search-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </span>
        </div>
    )
}

export default Search;