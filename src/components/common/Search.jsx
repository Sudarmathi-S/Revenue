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
        </div>
    )
}

export default Search;