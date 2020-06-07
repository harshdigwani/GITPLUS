import React from 'react'
import './Repo.css';

const Repo = (props) => {
    const repo = props.repo;
    console.log(repo);
    return (
        <div className="card">
            <a target="_blank" href={repo.html_url}>
                <h3>{repo.name}</h3>
                <img src={repo.owner.avatar_url} alt={repo.fullname} />
                {/* {(new Date(repo.created_at)).toDateString()} */}
                <br />
                <div className="stats">
                    <span className="fa fa-circle font-lang" />&nbsp;{repo.language}
                    <a className="text-right" href={repo.homepage} target="_blank"><span className="fa fa-home" /> Homepage</a><br />
                    <span className="fa fa-code-fork font-fork" />&nbsp;{repo.forks} &nbsp;&nbsp;&nbsp;
                <span className="fa fa-star font-star" />&nbsp;{repo.watchers} &nbsp;&nbsp;&nbsp;
                <span>{repo.size} KB</span>
                </div>
            </a>
        </div>
    )
}

export default Repo