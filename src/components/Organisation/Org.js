import React from 'react'
import './Org.css';

const Org = (props) => {
    const org = props.org;
    return (
        <div className="card" onClick={() => window.open(org.html_url)}>
            <h3>{org.login}</h3>
            <img className="img" src={org.avatar_url} alt={org.avatar_url} />
        </div>
    )
}

export default Org