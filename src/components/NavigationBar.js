import React from 'react';
import './NavigationBar.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/Home';

function NavigationBar() {
    return(
        <div className="navContainer">
            <Router>
                <div class="navigationBar">
                    <a>
                        <Link to="/">Home</Link>
                    </a>
                    <a>
                        <Link to="/rules">Rules</Link>
                    </a>
                    <a>
                        <Link to="/store">Store</Link>
                    </a>
                    <a>
                        <Link to="/scores">Scores</Link>
                    </a>
                    <a>
                        <Link to="/support">Support</Link>
                    </a>
                    <Route exact path="/" component={ Home } />
                    <Route path="/rules" component={ Home } />
                    <Route path="/store" component={ Home } />
                    <Route path="/scores" component={ Home } />
                    <Route path="/support" component={ Home } />
                </div>
            </Router>
        </div>
    );
}

export default NavigationBar;