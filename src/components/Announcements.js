import React, { useState } from 'react';
import './Announcements.css';


function AnnouncementsBoard() {
    return(
        <div>
            <h1>Announcements Header</h1>
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