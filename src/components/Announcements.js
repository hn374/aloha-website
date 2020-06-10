import React, { useState } from 'react';
import './Announcements.css';


function AnnouncementsBoard() {
    return(
        <div className="announcementsContainer">
            <h1 className="announceHeader">Announcements</h1>
            <Announcement 
            title="Free Dogs"
            author="Benjamin Franklin"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ></Announcement>
            <Announcement 
            title="Free Ice Cream"
            author="Thomas Jefferson"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ></Announcement>
            <Announcement 
            title="Free Mods"
            author="Washington"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ></Announcement>
        </div>
    );
}

function Announcement(props) {
    return(
        <div className="announcement">
            <div className="announcementTitle">{ props.title }</div>
            <div className="author">{ props.author}</div>
            <p className="paragraphText">{ props.text }</p>
        </div>
    );
}

export default AnnouncementsBoard;