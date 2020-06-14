import React from 'react';
import './SideBar.css';
import { FaDiscord, FaTwitter, FaStore } from 'react-icons/fa';
import * as Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

function SideBar() {
    return(
        <div>
            <div className="sidebarContainer">
                <h1 className="socialMediaHeader">Social Media</h1>
                <SocialMediaLink socialIcon={<FaStore />} socialHeader="STORE" socialLink="shop.aloha.gg"></SocialMediaLink>
                <SocialMediaLink socialIcon={<FaTwitter />} socialHeader="TWITTER" socialLink="@alohadotgg"></SocialMediaLink>
                <SocialMediaLink socialIcon={<FaDiscord />} socialHeader="DISCORD" socialLink="discord.aloha.gg"></SocialMediaLink>
            </div>
            <RecentAnnouncements></RecentAnnouncements>
        </div>
    );
}

function SocialMediaLink(props) {
    return(
        <div className="socialContainer">
            <span className="socialIcons">{ props.socialIcon }</span>
            <span className="socialHeaders">{ props.socialHeader }: </span>
            <a className="socialLinks"href={"https://www." + props.socialLink }><span className="socialLinks">{ props.socialLink }</span></a>
        </div>
    )
}

function RecentAnnouncements() {
    return(
        <div className="recentAnnouncements">
            <h1 className="recentHeader">Recent Announcements</h1>
            <div className="allAnnouncements">
            <ScrollLink 
                to="freeDog" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='recentAnnouncement'
            >
                <a className="recentAnnouncement">Free Dogs</a>
            </ScrollLink> 
            <ScrollLink 
                to="freeIceCream" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='recentAnnouncement'
            >
                <a className="recentAnnouncement">Free Ice Cream</a>
            </ScrollLink>
            <ScrollLink 
                to="freeMods" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='recentAnnouncement'
            >
                <a className="recentAnnouncement">Free Mods</a>
            </ScrollLink>
            </div>
        </div>
    );
}

export default SideBar;