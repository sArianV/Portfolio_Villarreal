import React, { useEffect, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import styles from './map.module.css';

function Map(props) {
    const [myPosition, setMyPosition] = useState()
    const { selectedPosition, setSelectedPosition } = props

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            if (latitude && longitude) {
                setMyPosition([latitude, longitude]);
            }
        });
    }, []);

    const Markers = (props) => {
        const { myPosition, selectedPosition, setSelectedPosition } = props;

        useEffect(() => {
            if (!selectedPosition && myPosition) {
                map.flyTo(myPosition, 9);
                setSelectedPosition(myPosition)
            }
        }, [myPosition]);

        const map = useMapEvents({
            click(e) {
                const coord = e.latlng.wrap()
                map.flyTo(coord, 9);
                setSelectedPosition([
                    coord.lat,
                    coord.lng
                ]);
            },

        })

        return (
            selectedPosition ?
                <Marker
                    key={selectedPosition[0]}
                    position={selectedPosition}
                    interactive={false}
                /> :
                null
        )

    }

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
                    myPosition={myPosition}
                    selectedPosition={selectedPosition}
                    setSelectedPosition={setSelectedPosition}
                />
            </MapContainer>
        </div >
    );
}

export default Map;
