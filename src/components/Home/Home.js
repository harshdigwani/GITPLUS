import React from 'react';
import Base from '../Base/Base';
import './Home.css';

const Home = () => {
    return (
        <Base>
            <div>
                <div className="home-container">
                    <img className="img-1" src='../../../../images/versionControl.svg' />
                    <div className="top-section">
                        <h1>Get More Insights with Gitplus</h1>
                        <ul>
                            <li><span className="fa fa-check font-green fa-lg" /> Get most Rated Repositories</li>
                            <li><span className="fa fa-check font-green fa-lg" /> Get most Rated Organisations </li>
                            <li><span className="fa fa-check font-green fa-lg" /> Get most Rated Profiles</li>
                            <li><span className="fa fa-check font-green fa-lg" /> New look for User Profile</li>
                            <li><span className="fa fa-check font-green fa-lg" /> Build on top of Github API</li>
                        </ul>
                    </div>
                </div>
                <div className="home-container">
                    <h2>TechStack Used</h2>
                    <div className="tech-stack">
                        <div className="tech"> <img className="img-2" src='../../../../images/react.svg' />
                            <h5>React.js</h5>
                        </div>
                        <div className="tech"> <img className="img-2" src='../../../../images/css.svg' />
                            <h5>HTML and CSS</h5>
                        </div>
                        <div className="tech"> <img className="img-2" src='../../../../images/api.svg' />
                            <h5>Github APIs</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Home