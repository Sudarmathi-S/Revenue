import React from "react";

const Loader = ({ loading, loadHead, loadMessage }) => {
    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <h2>{loadHead && loadHead}</h2>
                <p>{loadMessage && loadMessage}</p>
            </div>
        );
    }
}

export default Loader;