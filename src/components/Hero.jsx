import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './components.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div data-aos="fade-down" data-aos-duration="1500">
                <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
                <div className="bismillah-en">In the name of Allah, the Most Gracious, the Most Merciful</div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <div className="intro-text">
                    Together with our families<br />
                    We request the honor of your presence at the wedding of
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="2000">
                <h1 className="couple-names">
                    Asshik
                    <FaHeart className="heart-icon" />
                    Firthoush
                </h1>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                <div className="intro-text" style={{ marginTop: '1rem' }}>
                    Invite you to celebrate their ceremony<br />
                    In Sha Allah
                </div>
                <div className="date-display">
                    SUNDAY, FEBRUARY 1st, 2026
                </div>
            </div>
        </section>
    );
};

export default Hero;
