import React from 'react'
import './Org.css';

const Org = (props) => {
    const org = props.org;
    console.log(org);
    return (
        <div className="card">
            <a target="_blank" href={org.html_url}>
                <h3>{org.login}</h3>
                <img src={org.avatar_url} alt={org.avatar_url} />
            </a>
        </div>
    )
}

export default Org