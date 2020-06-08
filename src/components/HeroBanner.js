import React from 'react';
import './HeroBanner.css';
import Logo from '../assets/aloha_logo.png';
import NavigationBar from './NavigationBar';
import { FaDiscord, FaGamepad } from 'react-icons/fa';


function HeroBanner() {
    return(
        <div className="heroBannerContainer">
            <div className="imageContainer">
                <NavigationBar></NavigationBar>
                <div className="logoContainer">
                    <div className="serverButton">
                        <div>
                            <div>ALOHA.gg</div>
                            <div>join 0 online members</div>
                        </div>
                        <div>
                            <FaGamepad className="gamingIcon" />
                        </div>
                    </div>
                    <img className="heroBannerLogoImage" src={ Logo } alt="Logo"></img>
                    <div className="discordButton">
                        <div>
                            <FaDiscord className="discordIcon"/>
                        </div>
                        <div>
                            <div>DISCORD SERVER</div>
                            <div>join 154 online members</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;