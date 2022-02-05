import React, { useState} from 'react';
import styles from './mapContainer.module.css';
import Map from './Map';
function MapContainer(props) {
    const { selectedPosition, setSelectedPosition } = props

    return (
        <div className={styles.root}>
            <div className={styles.search_bar}>
               <p> {"use searchbar to find a city location ( TBD )"}</p>
            </div>
            <div className={styles.map_container}>
                or click on the map to select a location
                <Map 
                    selectedPosition={selectedPosition}
                    setSelectedPosition={setSelectedPosition}
                />
            </div>            
        </div>
    )
}

export default MapContainer;
