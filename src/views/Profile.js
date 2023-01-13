import React from 'react';
import Sidebar from "../components/Sidebar";
const Profile = () => {
    return (
        <div className='flex'>
           <Sidebar/>
           <div className='feed'>
                <h2>Profile</h2>
            </div>
        </div>
    );
};

export default Profile;