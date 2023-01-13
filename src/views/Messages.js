import React from 'react';
import Sidebar from "../components/Sidebar";
const Messages = () => {
    return (
        <div className='flex'>
           <Sidebar/>
           <div className='feed'>
                <h2>Messages</h2>
            </div>
        </div>
    )
};

export default Messages;