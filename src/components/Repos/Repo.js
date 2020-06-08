import React from 'react'
import './Repo.css';

const Repo = (props) => {
    const repo = props.repo;
    return (
        <div className="card">
            <h3>{repo.name}</h3>
            <img className="img" onClick={() => window.open(repo.html_url)} src={repo.owner.avatar_url} alt={repo.fullname} />
            <br />
            <div className="stats">
                <span className="fa fa-circle font-lang" />&nbsp;{repo.language}
                <span className="fa fa-home" onClick={() => window.open(repo.homepage)}> Homepage</span><br />
                <span className="fa fa-code-fork font-fork" />&nbsp;{repo.forks} &nbsp;&nbsp;&nbsp;
                <span className="fa fa-star font-star" />&nbsp;{repo.watchers} &nbsp;&nbsp;&nbsp;
                <span>{repo.size} KB</span>
            </div>
        </div>
    )
}

export default Repo