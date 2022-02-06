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

    useEffect(() => {
        if (latitude && longitude) {
            fetchData(latitude, longitude);
        }
    }, [latitude, longitude]);

    return (
        <div style={{ width: "100%", height: "100%",display:"flex", flexDirection:"column" }}>

            {weather &&
                <div >

                    <div style={{ padding: "10px 0px 20px 10px" }}>
                        <Heading as='h3' size='lg'>
                            {weather?.name} , {weather?.sys.country}
                        </Heading>
                    </div>

                    <div style={{margin: "0px 0px 0px 30px" }}>
                        <div style={{minWidth: "200px", minHeight:"50px", display:"flex", alignItems:"center"}}>
                           <Text fontSize='2xl'>
                            {weather?.weather[0].description} 
                            </Text> 
                            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} />
                        </div>
                        
                        <p>Temperatura: </p>
                        <div style={{ marginLeft: "30px"}}>
                            <p>
                                actual: {weather?.main?.temp ? (Math.round(weather?.main?.temp) + "°") : null}
                            </p>
                            <p>
                                sensación termica: {weather?.main?.feels_like ? (Math.round(weather?.main?.feels_like) + "°") : null}
                            </p>
                            <p>
                                min: {weather?.main?.temp_min ? (Math.round(weather?.main?.temp_min) + "°") : null}
                            </p>
                            <p>
                                max: {weather?.main?.temp_max ? (Math.round(weather?.main?.temp_max) + "°") : null}
                            </p>
                        </div>
                        <br />
                        <p>
                            Humedad: {weather?.main?.humidity ? (weather?.main?.humidity + "%") : null}
                        </p>
                        <br />
                        <p>
                            Presión: {weather?.main?.pressure ? (weather?.main?.pressure + "hPa") : null}
                        </p>
                        <br />
                        <p>
                            Viento:
                        </p>
                        <div style={{ marginLeft: "30px"}}>
                            <p>
                                velocidad {weather?.wind?.speed ? (weather?.wind?.speed + "m/s") : null}
                            </p>
                            <p>
                                dirección {weather?.wind?.deg ? (weather?.wind?.deg + "°") : null}
                            </p>
                        </div>
                    </div>


                </div>
            }
        </div>
    );
}

export default WeatherContainer;
