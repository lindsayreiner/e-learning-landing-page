import React from 'react';
import '../styles/LandingPage.css'

import heroImg from '../assets/image-hero-desktop.png'

export default function LandingPage() {
    return (
        <>
            <nav className="navBar">
                <h1 className="company">skilled</h1>
                <button className="getStartedBtn">Get Started</button>
            </nav>

            <section className="heroCont">
                <div className="heroTextCont">
                    <h2 className="heroTitle">Maximize skill, minimize budget</h2>
                    <p className="heroText">Our modern courses across a range of in-demand skills will give you the
                        knowledge you need to live the life you want.</p>
                </div>

                <img className="heroImg" src={heroImg} alt="woman-drinking-coffee" height="800" />
            </section>
        </>
    )
}
