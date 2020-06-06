import React, { useState } from 'react';
import './Home.css';
import NavigationBar from '../components/NavigationBar';

function Home() {
    return(
        <div>
            <NavigationBar></NavigationBar>
            <div>Hello World</div>
        </div>
    );
}

export default Home;