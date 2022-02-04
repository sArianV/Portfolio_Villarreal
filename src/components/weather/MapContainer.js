import React, { useState} from 'react';
import styles from './mapContainer.module.css';
import Map from './Map';
function MapContainer(props) {
    const { selectedPosition, setSelectedPosition } = props

    return (
        <div className={styles.root}>
            <div className={styles.search_bar}>
               searchbar 
            </div>
            <div className={styles.map_container}>
                <Map 
                    selectedPosition={selectedPosition}
                    setSelectedPosition={setSelectedPosition}
                />
            </div>            
        </div>
    )
}

export default MapContainer;
