import React from 'react'
import './Profile.css';

const Profile = (props) => {
    const profile = props.profile;
    console.log(profile);
    return (
        <div className="card">
            <a target="_blank" href={profile.html_url}>
                <h3>{profile.login}</h3>
                <img src={profile.avatar_url} alt={profile.avatar_url} />
            </a>
        </div>
    )

}

export default Profile