import React, { useState } from 'react';
import './SideBar.css';
import { FaDiscord, FaTwitter, FaStore } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

function SideBar() {
    return(
        <div className="sidebarContainer">
            <SocialMediaLink socialIcon={<MdWeb />} socialHeader="WEBSITE" socialLink="aloha.gg"></SocialMediaLink>
            <SocialMediaLink socialIcon={<FaStore />} socialHeader="STORE" socialLink="shop.aloha.gg"></SocialMediaLink>
            <SocialMediaLink socialIcon={<FaTwitter />} socialHeader="TWITTER" socialLink="@alohadotgg"></SocialMediaLink>
            <SocialMediaLink socialIcon={<FaDiscord />} socialHeader="DISCORD" socialLink="discord.aloha.gg"></SocialMediaLink>
        </div>
    );
}

function SocialMediaLink(props) {
    return(
        <div className="socialContainer">
            <span className="socialIcons">{ props.socialIcon }</span>
            <span className="socialHeaders">{ props.socialHeader }: </span>
            <a href={"https://www." + props.socialLink }><span className="socialLinks">{ props.socialLink }</span></a>
        </div>
    )
}

export default SideBar;