import React from "react";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Logofenis</h3>
                        <p>Full Stack Developer passionate about creating amazing web experiences.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://github.com/logofenis" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:your.email@example.com">Email</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}