import React, { useState } from 'react';
import { Box, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import MapContainer from '../components/weather/MapContainer';

import styles from './weatherScreen.module.css';
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import WeatherContainer from '../components/weather/WeatherContainer';



function Weather() {
    const [selectedPosition, setSelectedPosition] = useState();
    return (
        <SimpleGrid columns={responsiveColums} spacingX='20px' spacingY='10px' className={styles.box}>
            <Box className={styles.map} >
                <MapContainer
                    selectedPosition={selectedPosition}
                    setSelectedPosition={setSelectedPosition}
                />
            </Box>
            <Box className={styles.weather_container} >
                <WeatherContainer
                    selectedPosition={selectedPosition}
                />
            </Box>
        </SimpleGrid>
    );
}

export default Weather;

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
})

// 3. Extend the theme
const theme = extendTheme({ breakpoints })
const responsiveColums = { base: 1, sm: 1, md: 2 }