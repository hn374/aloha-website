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
                            <div className="bannerHeader">ALOHA.GG</div>
                            <div className="bannerText">join 0 online members</div>
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
                            <div className="bannerHeader">DISCORD SERVER</div>
                            <div className="bannerText">join 154 online members</div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="curve" xmlns="http://www.w3.org/2000/svg" width="1440" height="40" viewBox="0 0 1440 20">
                <path className="path" d="M0,27.01C239.659,7,479.143,0,718.453,0S1198.28,7,1440,27.01V40H0Z" fill-rule="evenodd"></path>
            </svg>
        </div>
    );
}

export default HeroBanner;