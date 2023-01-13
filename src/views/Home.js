import React from 'react';
import PostBox from '../components/PostBox';
import Sidebar from "../components/Sidebar";
import Post from '../components/Post';
const Home = () => {
    return (
        <div className='flex '>
           <Sidebar/>
            <div className='feed'>
                <h2>Home</h2>
                <PostBox/>
                <Post/>
            </div>
            
        </div>
    );
};

export default Home;