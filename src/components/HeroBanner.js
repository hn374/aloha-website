import React from 'react';
import './HeroBanner.css';
import Logo from '../assets/aloha_logo.png';
import NavigationBar from './NavigationBar';


function HeroBanner() {
    return(
        <div className="heroBannerContainer">
            <div className="imageContainer">
                <NavigationBar></NavigationBar>
                <div>
                <img className="heroBannerLogoImage" src={ Logo } alt="Logo"></img>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;