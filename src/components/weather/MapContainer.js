import React from 'react';
import styles from './mapContainer.module.css';
import Map from './Map';
function MapContainer() {
    return (
        <div className={styles.root}>
            <div className={styles.search_bar}>
               searchbar 
            </div>
            <div className={styles.map_container}>
                <Map />
            </div>            
        </div>
    )
}

export default MapContainer;
