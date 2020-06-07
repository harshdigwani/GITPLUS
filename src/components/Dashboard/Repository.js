import React from 'react';
import './Repository.css';

const Repository = (props) => {
    const { repo } = props;
    return (
        <div className="repo-details">
            <a target="_blank" href={repo.html_url}>
                <h3>{repo.name} <span className="fa fa-external-link-square"></span></h3>
            </a>
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