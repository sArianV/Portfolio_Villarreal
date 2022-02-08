import React, { useEffect, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { getExtendedWeather } from '../../services/weather';
import Line from '../charts/Line';

function ExtendedWeather({ selectedPosition }) {
    const [latitude, longitude] = selectedPosition != null ? selectedPosition : [];
    const [weather, setWeather] = useState();
    const [error, setError] = useState();

    const fetchData = async (latitude, longitude) => {
        const response = await getExtendedWeather(latitude, longitude)
        if (response.ok) {
            setWeather(response.data)
        } else {
            setError(response.error)
        }
    }

    useEffect(() => {
        setError(null)
        setWeather(null)
        if (latitude && longitude) {
            fetchData(latitude, longitude);
        }
    }, [latitude, longitude]);


    return (
        <div style={{ marginLeft:"5%",width: "90%", minHeight: "400px", paddingTop: "10px" }}>
            <Heading
                as='h4'
                size='md'
                pl="5%"
                pb="20px"
                pt="20px"
            >
                Extended
            </Heading>
            {weather != null && <Line data={weather} />}
            {error != null &&
                <Text
                    fontSize='md'
                    textTransform='capitalize'
                >
                    {error}
                </Text>
            }
        </div>
    );
}

export default ExtendedWeather;
