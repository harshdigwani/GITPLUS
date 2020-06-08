import React from 'react'
import './Profile.css';

const Profile = (props) => {
    const profile = props.profile;
    return (
        <div className="card" onClick={() => window.open(profile.html_url)}>
            <h3>{profile.login}</h3>
            <img className="img" src={profile.avatar_url} alt={profile.avatar_url} />
        </div>
    )

}

export default Profile