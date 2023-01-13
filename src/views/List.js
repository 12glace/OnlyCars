import React from 'react';
import Sidebar from "../components/Sidebar";
const List = () => {
    return (
        <div className='flex'>
           <Sidebar/>
           <div className='feed'>
                <h2>List</h2>
            </div>
        </div>
    );
};

export default List;