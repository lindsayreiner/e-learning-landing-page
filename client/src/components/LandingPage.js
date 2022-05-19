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
            <section className="coursesCont">
                <div>Check out our most popular courses!</div>
                <div className="courseCard">
                    <span className="courseTitle">Animation</span>
                    <p> Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
                    <a href="url">Get Started</a>
                </div>

                <div className="courseCard">
                    <span className="courseTitle">Design</span>
                    <p className="courseDesc"> Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
                    <a href="url">Get Started</a>

                </div>
                <div className="courseCard">
                    <span className="courseTitle">Photography</span>
                    <p className="courseDesc"> Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
                    <a href="url">Get Started</a>
                </div>
                <div className="courseCard">
                    <span className="courseTitle">Crypto</span>
                    <p className="courseDesc">All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.</p>
                    <a href="url">Get Started</a>
                </div>
                <div className="courseCard">
                    <span className="courseTitle">Business</span>
                    <p className="courseDesc"> A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
                    <a href="url">Get Started</a>
                </div>
            </section>
        </>
    )
}
