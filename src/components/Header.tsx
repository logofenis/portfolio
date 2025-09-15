import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>Logofenis</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="cta">
                    <a href="#contact" className="cta-button">Get In Touch</a>
                </div>
            </div>
        </header>
    )
}