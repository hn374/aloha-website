import React, { useState } from 'react';
import './NavigationBar.css';
import { Navbar, Nav } from 'rsuite';

function NavigationBar() {
    return(
        <div className="navContainer">
            <Navbar className="navBar">
                <Navbar.Body>
                    <Nav>
                        <Nav.Item>Home</Nav.Item>
                        <Nav.Item>Rules</Nav.Item>
                        <Nav.Item>Store</Nav.Item>
                        <Nav.Item>Scores</Nav.Item>
                        <Nav.Item>Support</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    );
}

export default NavigationBar;