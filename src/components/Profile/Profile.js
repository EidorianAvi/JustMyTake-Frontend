import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div class="profile-page">
            <p class="username">My Profile</p>
            <img src="/assets/blankavatar.jpg" alt="Profile Picture"/>
            <section class="about-me">
                <p class="about-header">About:</p>
                <p class="about-placeholder">Section is currently empty.</p>
                <p class="about-header">Interests:</p>
                <p class="about-placeholder">Section is currently empty.</p>
            </section>
            <button>Edit Profile</button>
        </div>
    )
}

export default Profile
