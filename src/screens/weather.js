import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Map from '../components/weather/Map';
import styles from './weather.module.css';
function weather() {
    return (
        <SimpleGrid columns={2} spacing={10} className={styles.box}>
            <Box bg='transparent' height='100%'>
                <Map />
            </Box>
            <Box bg='transparent' height='100%'>

            </Box>
        </SimpleGrid>
    );
}

export default weather;
