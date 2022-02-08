import React, { useContext, useEffect, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import styles from './map.module.css';
import WeatherContext from '../../context/weather/weatherContext';

const Markers = ({location, setLocation}) => {

    useEffect(() => {
        if (location) {
            map.flyTo(location, 9);
        }
    }, [location]);

    const map = useMapEvents({
        click(e) {
            const coord = e.latlng.wrap()
            setLocation(
                coord.lat,
                coord.lng
            );
        },

    })

    return (
        location ?
            <Marker
                key={location[0]}
                position={location}
                interactive={false}
            /> :
            null
    )

}

function Map(props) {

    const weatherContext = useContext(WeatherContext);
    const { setLocation, location } = weatherContext;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            if (latitude && longitude) {
                setLocation(latitude, longitude);
            }
        });
    }, []);

    return (
        <div className={styles.root} >
            <MapContainer
                center={[0, 0]}
                zoom={13}
                scrollWheelZoom={true}
                style={{
                    height: 'calc( 100% ) ',
                    width: 'calc( 100% )',
                    borderRadius: '3em',
                    boxSizing: 'border-box',
                    padding: '1em',
                    overflow: 'hidden',
                    boxShadow: "inset 0 0 10px #000000",
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers 
                    location={location}
                    setLocation={setLocation}
                />
            </MapContainer>
        </div >
    );
}

export default Map;
