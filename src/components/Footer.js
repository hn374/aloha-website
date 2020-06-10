import React from 'react';
import './Footer.css';
import Logo from '../assets/aloha_logo.png';

function Footer() {
    return(
        <div className="footerContainer">
            <div className="topFooterContainer">
                <div className="leftFooterContainer">
                    <div className="topHeader">
                        Play now at 
                        {/* <button>aloha.gg</button> */}
                        <a className="alohaLink">aloha.gg</a>
                    </div>
                    <p className="footerText">The Aloha! Network offers a unique 1.8+ KitPvP experience enhanced with LabyMod voice chat, allowing players to communicate in-game and play together across the server. With an active administration team, you can be sure that Aloha will be there for our players and provide them the best experience possible.</p>
                </div>
                <div className="rightFooterContainer">
                    <img className="logoImage" src={ Logo } alt="Logo"></img>
                </div>
            </div>
            <BottomFooter></BottomFooter>
        </div>
    );
}

function BottomFooter() {
    return(
        <div className="bottomFooterHeader">Aloha! Network. All Rights Reserved.</div>
    );
}

export default Footer;