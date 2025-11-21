import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './components.css';
import mapThumbnail from '../assets/map.png';

const Details = () => {
    return (
        <section className="details-section">
            <div className="venue-card" data-aos="flip-up" data-aos-duration="1500">
                <h2 className="ceremony-title">Nikkah Ceremony</h2>
                <div className="venue-info">
                    <h3 className="venue-name">Nelsear Hall</h3>
                    <p className="venue-address">Cheranmahadevi</p>
                    <p className="time">10:30 AM</p>

                    <img src={mapThumbnail} alt="Location Map" className="map-thumbnail" />

                    <br />

                    <a
                        href="https://maps.app.goo.gl/NWUe8niPTVxDEvr59"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-button"
                    >
                        <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                        View Location
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Details;
