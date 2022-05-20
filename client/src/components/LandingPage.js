import React from 'react';
import '../styles/LandingPage.css'

import heroImg from '../assets/image-hero-desktop.png';
import darkLogo from '../assets/logo-dark.svg';
import lightLogo from '../assets/logo-light.svg';

import animation from '../assets/icon-animation.svg';
import design from '../assets/icon-design.svg';
import photography from '../assets/icon-photography.svg';
import crypto from '../assets/icon-crypto.svg';
import business from '../assets/icon-business.svg';



export default function LandingPage() {
    return (
        <>
            <nav className="navBar">
                <a href="#" class="logo">
                    <img src={darkLogo} alt="Skilled e-learning logo" />
                </a>
                <button className="getStartedBtn blue">Get Started</button>
            </nav>

            <section className="heroCont">
                <div className="heroTextCont">
                    <h2 className="heroTitle">Maximize skill, minimize budget</h2>
                    <p className="heroText">Our modern courses across a range of in-demand skills will give you the
                        knowledge you need to live the life you want.</p>
                    <button className="getStartedBtn orange">Get Started</button>
                </div>

                <img className="heroImg" src={heroImg} alt="woman-drinking-coffee" height="800" />
            </section>
            <section className="coursesGrid">
                <h3 className="checkOut grid-padding">Check out our most popular courses!</h3>
                <div className="course grid-padding animation">
                    <img className="courseIcon" src={animation} />
                    <h4 className="courseTitle">Animation</h4>
                    <p className="courseDesc"> Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
                    <a href="url" className="course-get-started">Get Started</a>
                </div>

                <div className="course grid-padding design">
                    <img className="courseIcon" src={design} />
                    <h4 className="courseTitle">Design</h4>
                    <p className="courseDesc"> Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
                    <a href="url" className="course-get-started">Get Started</a>

                </div>
                <div className="course grid-padding photography">
                    <img className="courseIcon" src={photography} />
                    <h4 className="courseTitle">Photography</h4>
                    <p className="courseDesc"> Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
                    <a href="url" className="course-get-started">Get Started</a>
                </div>
                <div className="course grid-padding crypto">
                    <img className="courseIcon" src={crypto} />
                    <h4 className="courseTitle">Crypto</h4>
                    <p className="courseDesc">All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.</p>
                    <a href="url" className="course-get-started">Get Started</a>
                </div>
                <div className="course grid-padding business">
                    <img className="courseIcon" src={business} />
                    <h4 className="courseTitle">Business</h4>
                    <p className="courseDesc"> A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
                    <a href="url" className="course-get-started">Get Started</a>
                </div>
            </section>

            <footer className="footer">
                <a href="#" class="logo">
                    <img src={lightLogo} alt="Skilled e-learning logo" />
                </a>
                <button className="getStartedBtn pink">Get Started</button>
            </footer>
        </>
    )
}
