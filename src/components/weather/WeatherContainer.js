import React, { useEffect, useState } from 'react';
import { getWeather } from '../../services/weather';
import { Heading, Text } from '@chakra-ui/react'

function WeatherContainer({ selectedPosition }) {
    const [latitude, longitude] = selectedPosition != null ? selectedPosition : [];
    const [weather, setWeather] = useState();

    const fetchData = async (latitude, longitude) => {
        const response = await getWeather(latitude, longitude)
        setWeather(response)
    }
    function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
    useEffect(() => {
        if (latitude && longitude) {
            fetchData(latitude, longitude);
        }
    }, [latitude, longitude]);

    return (
        <div style={{ width: "100%", height: "100%", paddingLeft: "20%" }}>

            {weather &&
                <div >

                    <div style={{ padding: "10px 0px 10px 0px" }}>
                        <Heading as='h3' size='lg'>
                            {weather?.name} , {weather?.sys.country}
                        </Heading>
                        <Text
                            fontSize='md'
                            textTransform='capitalize'
                        >
                            {weather?.weather[0].description}
                        </Text>
                    </div>

                    <div style={{ width: "100%", display: "flex" ,alignContent: "center"}}>
                        <div style={{width: "50%"}}>
                            <div style={{ minWidth: "150px", display: "flex", alignItems: "center" }}>
                                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} />
                                <Text fontSize='5xl'>
                                    {weather?.main?.temp ? (Math.round(weather?.main?.temp) + "°") : null}
                                </Text>
                            </div>
                            <div style={{ paddingLeft: "10px" }}>
                                <Text fontSize='sm'>
                                    Real feed {weather?.main?.feels_like ? (Math.round(weather?.main?.feels_like) + "°") : null}
                                </Text>
                            </div>
                        </div>
                        <div style={{width: "50%", paddingTop:"1em"}}>
                            <Text fontSize='sm'>
                                Min: {weather?.main?.temp_min ? (Math.round(weather?.main?.temp_min) + "°") : null}
                            </Text>
                            <Text fontSize='sm'>
                                Max: {weather?.main?.temp_max ? (Math.round(weather?.main?.temp_max) + "°") : null}
                            </Text>
                            <Text fontSize='sm'>
                                Humidity: {weather?.main?.humidity ? (weather?.main?.humidity + "%") : null}
                            </Text>
                            <Text fontSize='sm'>
                                Wind: {weather?.wind?.speed ? (weather?.wind?.speed + "m/s") : null} {weather?.wind?.deg ? degToCompass(weather?.wind?.deg) : null}
                            </Text>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
}

export default WeatherContainer;
