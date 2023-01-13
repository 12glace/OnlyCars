import {React, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from "@mui/material"
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './Firebase/firebase';
import Home from './views/Home';
import Login from './views/Login';
import Notifications from './views/Notifications';
import Messages from './views/Messages';
import Profile from './views/Profile';
import Bookmarks from './views/Bookmarks';
import List from './views/List';
import Explore from './views/Explore';

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    });
  }, []) 
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
       {user? <Button className="logoff" onClick={logout}> Sign Out </Button>:null }
       
    <Router>      
      {user?                
      <Routes>
        <Route path="*" exact element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>  
        <Route exact path='/notifications' element={<Notifications/>}/>
        <Route exact path='/messages' element={<Messages/>}/>     
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/bookmarks' element={<Bookmarks/>}/>             
        <Route exact path='/list' element={<List/>}/>     
        <Route exact path='/explore' element={<Explore />}/>     
        
      </Routes>  
      : 
      <Routes><Route path="*" exact element={<Login/>}/></Routes>
       }
    </Router>
    </div>
  );
}

export default App;
