import React from 'react';
import './Repository.css';

const Repository = (props) => {
    const { repo } = props;
    console.log(repo);
    return (
        <div className="repo-details">
            <h3>{repo.name}</h3>
            {repo.description}<br /><br />
            {(new Date(repo.created_at)).toDateString()}<br />
            <a href={repo.homepage} target="_blank"><span className="fa fa-home" /> Homepage</a><br />

            <div className="stats">
                <span className="fa fa-circle font-lang" />&nbsp;&nbsp;{repo.language}<br />
                <span className="fa fa-code-fork font-fork" />&nbsp;{repo.forks} &nbsp;&nbsp;&nbsp;
                <span className="fa fa-star font-star" />&nbsp; {repo.watchers} &nbsp;&nbsp;&nbsp;
                <span>{repo.size} KB</span>
            </div>
        </div >)
}

export default Repository