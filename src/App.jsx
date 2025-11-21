import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="app-container">
      <Hero />
      <Countdown />
      <Details />
      <footer className="footer" data-aos="fade-up">
        <p>We look forward to celebrating with you!</p>
      </footer>
    </div>
  );
}

export default App;
