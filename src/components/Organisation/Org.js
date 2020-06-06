import React from 'react'
import './Org.css';

const Org = (props) => {
    const org = props.org;
    console.log(org);
    return (
        <div className="card">
            <h3>{org.login}</h3>
            <img src={org.avatar_url} alt={org.avatar_url} />
            <hr />
        </div>
    )
}

export default Org