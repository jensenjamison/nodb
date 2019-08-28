import React from "react";
import './Home.css'


export default function home(props) {
    return (
        <body>
            <nav className="nav-bar">
                <button className="home-button">Home</button>
                    <div className="nav-right">
                        <button className="servers-button">Server's</button>
                        <button className="kits-button">Kit's</button>
                        <button className="contact-button">Contact</button>
                    </div>
            </nav>
            
            <section className="middle-front-page">
                <div className="middle-front-page-info">
                    <h1>Welcome to The ---Blank--- Community Rust Server's Site</h1>
                    <h4>Join are Discord at https://discord.gg/------- Rules include no racism and no party's larger than the posted limit</h4>
                </div>
            </section>


        </body>
    )
}

