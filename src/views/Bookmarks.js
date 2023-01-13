import React from 'react';
import Sidebar from "../components/Sidebar";
const Bookmarks = () => {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='feed'>
                <h2>Bookmarks</h2>
            </div>
        </div>
    );
};

export default Bookmarks;