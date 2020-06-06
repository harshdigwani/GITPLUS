import React from 'react';
import './User.css';

const User = (props) => {
    const { user } = props;
    const date = new Date(user.created_at);
    return (
        <div className="user-container">
            <div className="user-section">
                <img className="dp" src={user.avatar_url} alt="User" />
                <h2>@{user.login}</h2>
                {"Joined " + date.toDateString()}<br />
                {user.name}<br />
                {user.bio}<br />
                <div className="counts">
                    <span className="badge">{user.public_repos}
                        <p>REPOSITORIES</p>
                    </span>
                    <span className="badge">{user.followers}
                        <p>FOLLOWERS</p>
                    </span>
                    <span className="badge">{user.following}
                        <p>FOLLOWING</p>
                    </span>
                </div>
            </div>
        </div>)
}

export default User