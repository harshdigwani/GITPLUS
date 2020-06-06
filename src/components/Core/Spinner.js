import React from 'react';
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <h1 className="loading"><span className="fa fa-spinner fa-pulse fa-x fa-fw" /> Loading...</h1>
        </div>
    )
}

export default Spinner