import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSize } from '../../hooks/useResizeObserver';
import styles from './map.module.css';

function Map() {
    const defaultPosition = [-33.1263605, -64.3568481]
    const ref = useRef(null)
    const size = useSize(ref)

    console.log(size);
    return (
        <div className={styles.root} ref={ref}>
            <MapContainer 
                center={defaultPosition} 
                zoom={13} 
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
                <Marker position={defaultPosition}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
    );
}

export default Map;
