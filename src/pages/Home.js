import React, { useState } from 'react';
import './Home.css';
import SideBar from '../components/SideBar';
import AnnouncementsBoard from '../components/Announcements';

function Home() {
    return(
        <div className="homeContainer">
            <div className="homeInnerContainer">
                <SideBar className="homeSidebar"></SideBar>
                <AnnouncementsBoard className="homeAnnouncement"></AnnouncementsBoard>
            </div>
        </div>
    );
}

export default Home;