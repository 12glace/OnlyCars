import React from 'react';
import Sidebar from "../components/Sidebar";
const Notifications = () => {
    return (
        <div className='flex'>
           <Sidebar/>
           <div className='feed'>
                <h2>Notifications</h2>
            </div>
        </div>
    );
};

export default Notifications;