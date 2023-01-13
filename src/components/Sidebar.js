import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import { NavLink, Navigate, Link } from 'react-router-dom';

const Sidebar = () => {
   
  return (
    <div className="sidebar">
        <h1 className="carsIcon" >🚗💨</h1>
        <Link className="link" to="/home"><SidebarOption Icon={HomeIcon} text="Home" active={true}/></Link>
        <Link className="link" to="/notifications"><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
        <Link className="link" to="/explore"><SidebarOption Icon={SearchIcon} text="Explore" /></Link>        
        <Link className="link" to="/messages"><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
        <Link className="link" to="/bookmarks"><SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /></Link>
        <Link className="link" to="/list"><SidebarOption Icon={ListAltIcon} text="Lists" /></Link>
        <Link className="link" to="/profile"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
        <Button variant="outlined" className="cars" fullWidth>+ Post</Button>
    </div>
  );
}

export default Sidebar;