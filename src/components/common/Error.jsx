import React from "react";

const Error = ({ error, errorHead }) => {
    if (error) {
        return (
            <div className="error-container">
                <div className="error-icon">⚠️</div>
                <label>{errorHead}</label>
                <p>{error}</p>
                <button
                    className="retry-btn"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </button>
            </div>
        );
    }
}

export default Error;