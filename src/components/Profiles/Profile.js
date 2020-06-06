import React from 'react'
import './Profile.css';

const Profile = (props) => {
    const profile = props.profile;
    console.log(profile);
    return (
        <div className="card">
            <h3>{profile.login}</h3>
            <img src={profile.avatar_url} alt={profile.avatar_url} />
            <hr />
        </div>
    )

}

export default Profile