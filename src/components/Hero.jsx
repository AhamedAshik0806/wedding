import React from 'react';
import './components.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div data-aos="fade-down" data-aos-duration="1500">
                <div className="bismillah">In the name of Allah, the Most Gracious, the Most Merciful</div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="2000">
                <h1 className="couple-names">
                    Ashik
                    <span className="ampersand">&</span>
                    Firthoush
                </h1>
            </div>

            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                <div className="date-display">
                    SUNDAY, FEBRUARY 1st, 2026
                </div>
            </div>
        </section>
    );
};

export default Hero;
