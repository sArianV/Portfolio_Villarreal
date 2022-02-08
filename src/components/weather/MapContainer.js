import React from 'react';
import styles from './mapContainer.module.css';
import Map from './Map';
import { Heading } from '@chakra-ui/react';
function MapContainer(props) {
    const { selectedPosition, setSelectedPosition } = props

    return (
        <div className={styles.root}>
            <div className={styles.search_bar}>
                <Heading as='h3' size='lg'> Select a location in the map </Heading>
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
