import React, { useState, useEffect } from 'react';
import './components.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('February 1, 2026 10:30:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="countdown-section" data-aos="fade-up">
            <h2 className="countdown-title">Counting Down to the Big Day</h2>
            <div className="timer-container">
                <div className="timer-box">
                    <span className="timer-value">{timeLeft.days}</span>
                    <span className="timer-label">Days</span>
                </div>
                <div className="timer-box">
                    <span className="timer-value">{timeLeft.hours}</span>
                    <span className="timer-label">Hours</span>
                </div>
                <div className="timer-box">
                    <span className="timer-value">{timeLeft.minutes}</span>
                    <span className="timer-label">Minutes</span>
                </div>
                <div className="timer-box">
                    <span className="timer-value">{timeLeft.seconds}</span>
                    <span className="timer-label">Seconds</span>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
