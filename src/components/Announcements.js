import React, { useState } from 'react';
import './Announcements.css';


function AnnouncementsBoard() {
    return(
        <div className="announcementsContainer">
            <h1>Announcements</h1>
            <div>Insert Announcements Here</div>
            <Announcement></Announcement>
        </div>
    );
}

function Announcement() {
    return(
        <div>Individual Announcement</div>
    );
}

export default AnnouncementsBoard;